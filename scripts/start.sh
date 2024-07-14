#!/bin/bash

# Load .env file variables
export $(grep -v '^#' .env | xargs)

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Get SERVER and SERVICES from .env
if [ -z "$SERVER" ]; then
    echo -e "${RED}SERVER is not set in .env file${NC}"
    exit 1
fi

# Convert SERVICES string to array
IFS=',' read -r -a SERVICES_ARRAY <<< "$SERVICES"

# Dump output in color and nice format
echo -e "${GREEN}Starting the application with the following configuration:${NC}"
echo -e "${BLUE}Server:${NC} $SERVER"
echo -e "${BLUE}Services:${NC} ${SERVICES_ARRAY[@]}"
echo -e "${BLUE}Environment:${NC} $APP_ENV"

# Set ENV variable to restart always if APP_ENV != local
if [ "$APP_ENV" != "local" ]; then
    export RESTART_POLICY=always
else
    export RESTART_POLICY=no
fi

# Create the command to launch the chain of compose files
COMPOSE_COMMAND="docker compose -f docker/compose/base.yml -f docker/compose/${APP_ENV}.yml"

# Add the SERVER compose file
COMPOSE_COMMAND="${COMPOSE_COMMAND} -f docker/compose/server/${SERVER}.yml"

# Add the SERVICES compose files
for service in "${SERVICES_ARRAY[@]}"; do
    COMPOSE_COMMAND="${COMPOSE_COMMAND} -f docker/compose/services/${service}.yml"
done

# Create final command
DOWN_COMMAND="${COMPOSE_COMMAND} -p ${CONTAINER_NAME} down"
UP_COMMAND="${COMPOSE_COMMAND} -p ${CONTAINER_NAME} up -d --remove-orphans"

# Run the command
echo -e "${GREEN}Final compose command:${NC}"
echo -e "${BLUE}${COMPOSE_COMMAND}${NC}"
eval "${DOWN_COMMAND}"
eval "${UP_COMMAND}"

DOCKER_APP_DIR=/var/www/${CONTAINER_NAME}

# Ensure framework folders exist
docker exec "${CONTAINER_NAME}" mkdir -p storage/framework/sessions
docker exec "${CONTAINER_NAME}" mkdir -p storage/framework/views
docker exec "${CONTAINER_NAME}" mkdir -p storage/framework/cache

# Ensure project directory is readable
docker exec "${CONTAINER_NAME}" chmod 775 .

# Ensure public folder is readable
docker exec "${CONTAINER_NAME}" chmod -R 775 public
docker exec "${CONTAINER_NAME}" bash -c "setfacl -R -m d:u::rwx,d:g::rwx,d:o::rX public"

# Ensure storage public folder is readable and future created files will be readable
docker exec "${CONTAINER_NAME}" chmod +x .
docker exec "${CONTAINER_NAME}" chmod +x storage
docker exec "${CONTAINER_NAME}" mkdir -p storage/app
docker exec "${CONTAINER_NAME}" chmod +x storage/app
docker exec "${CONTAINER_NAME}" mkdir -p storage/app/public
docker exec "${CONTAINER_NAME}" chmod +x storage/app/public

# Set default permissions for storage public folder (always read for everyone) with ACL
# Not that capital X means execute only if it is a directory or already has execute permission for some user
# The X for directories is very useful to ensure that new files and directories created there will be accessible
docker exec "${CONTAINER_NAME}" setfacl -R -d -m u::rwX,g::rwX,o::rX storage/app/public/

# Call build-docs script
docker exec "${CONTAINER_NAME}" bash -c "scripts/build-docs.sh"

# Install composer packages (read container name from environment variable)
COMPOSER_COMMAND="docker exec ${CONTAINER_NAME} composer install"
if [ "$APP_ENV" == "production" ]; then
    COMPOSER_COMMAND="${COMPOSER_COMMAND} --optimize-autoloader --no-dev"
fi
echo "Installing composer packages"
eval "${COMPOSER_COMMAND}"

# Check that APP_KEY is set
if [ -z "$APP_KEY" ]; then
    echo "APP_KEY is not set, generating one"
    docker exec  "${CONTAINER_NAME}" php artisan key:generate
fi

# Link storage folder
docker exec "${CONTAINER_NAME}" php artisan storage:link

# Install npm packages
echo "Installing npm packages"
docker exec "${CONTAINER_NAME}" npm install

# Compile assets
echo "Compiling assets"
docker exec  "${CONTAINER_NAME}" npm run build

# Optimize
if [ "$APP_ENV" == "production" ]; then
    echo "Optimizing for production"
    docker exec "${CONTAINER_NAME}" php artisan config:cache
    docker exec "${CONTAINER_NAME}" php artisan route:cache
    docker exec "${CONTAINER_NAME}" php artisan view:cache
fi

# Run the queue worker (optional)
#docker exec  "${CONTAINER_NAME}" php artisan queue:work --timeout=0

# Start the SERVER
if [ "$SERVER" == "octane" ]; then
    docker exec -d "${CONTAINER_NAME}" php -d variables_order=EGPCS \
                                            artisan octane:start \
                                            --SERVER=frankenphp \
                                            --host=0.0.0.0 \
                                            --admin-port=2019 \
                                            --port=80
fi

if [ "$SERVER" == "artisan" ]; then
docker exec -it "${CONTAINER_NAME}" php -d variables_order=EGPCS \
                                        artisan serve --host=0.0.0.0 --port=80
fi

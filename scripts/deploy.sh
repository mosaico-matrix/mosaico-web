#!/bin/bash

# Define your repository URL and branch (change as needed)
REPO_URL=""
BRANCH="master"
PROD_ENV="/home/sail/ci-cd/XXXX/prod_env"

# Define your deployment directory (change as needed)
DEPLOY_DIR="/var/www/laravel-dockerized/sites/XXXX"

# Create a temporary directory for the clone
TMP_DIR=$(mktemp -d)

# Clone the repository into the temporary directory
git clone --depth 1 -b "$BRANCH" "$REPO_URL" "$TMP_DIR"

# If cloning fails, stop the script
if [ $? -ne 0 ]; then
    echo "Error cloning repository"
    exit 1
fi

# Perform rsync to update the deployment directory NOTE THE / AT THE END MEANS TO COPY ALL FILES FROM DIR AND NOT THE DIR
rsync -av --no-perms --no-owner --no-group --delete "$TMP_DIR/" "$DEPLOY_DIR"

# Remove (if exists) the .env file from the deployment directory (backup it first)
if [ -f "$DEPLOY_DIR/.env" ]; then
    mv "$DEPLOY_DIR/.env" "$DEPLOY_DIR/.env.bak"
fi

# Copy production env file
cp "$PROD_ENV" "$DEPLOY_DIR/.env"

# Change to the deployment directory
cd "$DEPLOY_DIR" || exit 1

# Set permission on published dir
chmod -R 770 "$DEPLOY_DIR"

# Run start script (add error handling if needed)
#./scripts/start.sh --server caddy --services mailpit

# Clean up temporary directory
rm -rf "$TMP_DIR"

# Optional, run sonarqube analysis
#docker run \
#    --rm \
#    -e SONAR_HOST_URL="https://" \
#    -e SONAR_SCANNER_OPTS="-Dsonar.projectKey=NAME" \
#    -e SONAR_TOKEN="" \
#    -v "./:/usr/src" \
#    sonarsource/sonar-scanner-cli
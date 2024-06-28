#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

usage() {
    echo -e "${YELLOW}Usage:${NC} ./deploy.sh <path-to-prod-env-file>"
}

# Validate user argument, you should provide a path to the prod env file
if [ -z "$1" ]; then
    echo -e "${RED}Error:${NC} Missing argument"
    usage
    exit 1
fi

# Load .env file variables
export $(grep -v '^#' "$1" | xargs)

# Print the deployment configuration
echo -e "${GREEN}Starting the deployment with the following configuration:${NC}"
echo -e "${BLUE}Repository URL:${NC} $REPO_URL"
echo -e "${BLUE}Branch:${NC} $BRANCH"
echo -e "${BLUE}Deployment directory:${NC} $DEPLOY_DIR"

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
cp "$1" "$DEPLOY_DIR/.env" || exit 1

# Change to the deployment directory
cd "$DEPLOY_DIR" || exit 1

# Set permission on published dir
chmod -R 770 "$DEPLOY_DIR"

# Run start script (add error handling if needed)
./scripts/start.sh

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
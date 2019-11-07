#!/usr/bin/env bash

# Version key/value should be on his own line
VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Deploying version $VERSION"

tag="schmiede-website"
proxy_tag="schmiede-website-proxy"

tagged_image=436054152060.dkr.ecr.eu-central-1.amazonaws.com/${tag}:${VERSION}
tagged_image_proxy=436054152060.dkr.ecr.eu-central-1.amazonaws.com/${proxy_tag}:latest

login="$(aws ecr get-login --no-include-email --region eu-central-1)"
$login

echo "Building docker..."
docker build -f Dockerfile -t ${tag} .
docker tag ${tag}:latest ${tagged_image}

docker build -f Dockerfile-nginx -t ${proxy_tag} .
docker tag ${proxy_tag}:latest ${tagged_image_proxy}

echo "Pushing to AWS..."
docker push ${tagged_image}
docker push ${tagged_image_proxy}

# cluster config needs to created beforehand
# guide: https://github.com/aws/amazon-ecs-cli/blob/master/README.md#configuring-the-cli

CLUSTER_NAME=schmiede-website

echo "Stopping currently running service..."
ecs-cli compose service --cluster-config ${CLUSTER_NAME} stop

echo "Creating and starting service..."
TAGGED_IMAGE=${tagged_image} TAGGED_IMAGE_PROXY=${tagged_image_proxy} ecs-cli compose service --cluster-config ${CLUSTER_NAME} up
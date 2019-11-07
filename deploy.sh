#!/usr/bin/env bash

# Version key/value should be on his own line
VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "Deploying version $VERSION"

image="app"
tag="schmiede-website"
aws_tag="schmiede-website"
tagged_image=436054152060.dkr.ecr.eu-central-1.amazonaws.com/${aws_tag}:${VERSION}

login="$(aws ecr get-login --no-include-email --region eu-central-1)"
$login

echo "Building docker..."
docker build -f Dockerfile -t ${tag} .
docker tag ${tag}:latest ${tagged_image}

echo "Pushing to AWS..."
docker push ${tagged_image}

# cluster config needs to created beforehand
# guide: https://github.com/aws/amazon-ecs-cli/blob/master/README.md#configuring-the-cli

CLUSTER_NAME=schmiede-website

echo "Stopping currently running service..."
ecs-cli compose service --cluster-config ${CLUSTER_NAME} stop

echo "Creating and starting service..."
TAGGED_IMAGE=${tagged_image} ecs-cli compose service --cluster-config ${CLUSTER_NAME} up
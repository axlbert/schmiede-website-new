#!/usr/bin/env bash

set -a # automatically export all variables
source .env
set +a

# Version key/value should be on his own line
VERSION=$(cat package.json |
  grep version |
  head -1 |
  awk -F: '{ print $2 }' |
  sed 's/[",]//g' |
  tr -d '[[:space:]]')

echo "Deploying version $VERSION"

npm run build
npm run export-next

echo "${USER_AND_HOST}"

scp -i ${PEM_FILE} -r ./out/* ${USER_AND_HOST}:/home/ec2-user/content

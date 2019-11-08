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

rm -rf .next
rm -rf out

npm run build
npm run export-next

echo "${USER_AND_HOST}"

ssh -i ${PEM_FILE} ${USER_AND_HOST} "rm -rf /home/ec2-user/content/ && mkdir /home/ec2-user/content"
scp -i ${PEM_FILE} -r ./out/* ${USER_AND_HOST}:/home/ec2-user/content

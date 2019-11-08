FROM node:buster AS build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

ENV NODE_ENV production

COPY . /usr/src/app

RUN npm install
RUN rm -rf .next && npm run build
RUN rm -rf out && npm run export-next


FROM nginx:perl
LABEL maintainer="andy@schmiede.one"

COPY --from=build /usr/src/app/out /var/www

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/mime.types

COPY nginx.conf /etc/nginx/
COPY mime.types /etc/nginx/
COPY ./ssl /ssl

ENTRYPOINT ["nginx","-g","daemon off;"]
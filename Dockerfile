FROM nginx:perl
LABEL maintainer="andy@schmiede.one"

RUN rm /etc/nginx/nginx.conf
RUN rm /etc/nginx/mime.types

COPY nginx.conf /etc/nginx/
COPY mime.types /etc/nginx/
COPY ./ssl /ssl

ENTRYPOINT ["nginx","-g","daemon off;"]
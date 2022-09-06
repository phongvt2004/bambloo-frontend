# build stage
FROM node:lts-alpine as build-stage
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

WORKDIR /app
COPY ./package*.json ./
RUN yarn
RUN yarn upgrade
COPY . .
RUN yarn build

# production stage
FROM nginx:1.23.1 as production-stage
COPY default.heroku.conf /etc/nginx/conf.d/
COPY nginx.heroku.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/build /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.heroku.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

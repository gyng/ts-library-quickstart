FROM node:18.16.1-alpine3.18

WORKDIR /usr/src/app

# If package.json uses git, uncomment this
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache git

COPY package.json package-lock.json /usr/src/app/
RUN npm ci \
    && npm audit signatures \
    && npm cache clean --force

ARG NODE_ENV=production
COPY . /usr/src/app

CMD ["/usr/src/app/do-build.sh"]

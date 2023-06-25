FROM node:18.16.1-alpine3.18

WORKDIR /usr/src/app

# If package.json uses git, uncomment this
# RUN apk update \
#     && apk upgrade \
#     && apk add --no-cache git

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

ARG NODE_ENV=production
COPY . /usr/src/app

CMD ["/usr/src/app/do-build.sh"]

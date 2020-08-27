FROM node:latest-alpine

ARG REACT_APP_MESSAGE="Default Message"

COPY . /app

RUN yarn install

WORKDIR /app

CMD ["yarn", "start"]
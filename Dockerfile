FROM node:lts-alpine

COPY . /app

RUN yarn install

WORKDIR /app

CMD ["yarn", "start"]
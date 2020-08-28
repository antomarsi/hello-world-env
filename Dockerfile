FROM node:lts-alpine

COPY . /app

RUN yarn install

WORKDIR /app


EXPOSE 80

ENV PORT=8080

CMD ["yarn", "start"]
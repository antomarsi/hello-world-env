FROM node:lts-alpine

COPY . .

RUN yarn install

CMD ["yarn", "start"]
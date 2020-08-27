FROM node:latest-alpine

ARG MESSAGE="Default Message"

COPY . /app

RUN yarn install

WORKDIR /app


EXPOSE 80

ENV REACT_APP_MESSAGE=$MESSAGE
ENV PORT=8080

CMD ["yarn", "start"]
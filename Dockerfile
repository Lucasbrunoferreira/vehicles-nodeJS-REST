FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY /build/ ./

EXPOSE 8080

CMD [ "node", "server.js" ]

FROM node:latest

COPY . /opt/ngapimock

WORKDIR /opt/ngapimock

RUN yarn install

EXPOSE 3000

ENTRYPOINT ["yarn", "serve"]

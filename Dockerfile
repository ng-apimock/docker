FROM node:latest

COPY . /opt/ngapimock

WORKDIR /opt/ngapimock

RUN npm i

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

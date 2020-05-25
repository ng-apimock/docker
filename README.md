# Docker image for @ng-apimock

## Usage
You can start the docker container manually
```
$ docker run --name my-mock-server -d ngapimock/standalone:latest -p 3000:3000 -v ./mocks:/opt/ngapimock/mocks
``` 

or using docker-compose.yaml
```yaml
version: '3.3'

services:
  ngapimock-standalone:
    image: ngapimock/standalone:latest
    restart: always
    ports:
      - '3000:3000'
    expose:
      - '3000'
    volumes:
      - ./mocks:/opt/ngapimock/mocks
```

## Port
```
3000
```

## Mocks
The mocks are read from your volume mount to /opt/ngapimock/mocks

## Documentation on ng-apimock
Documentation about ng-apimock can be found at https://github.com/ng-apimock/core

## Dev-interface
The [dev-interface](https://github.com/ng-apimock/core) can be accessed under:
```
http://localhost:3000/dev-interface
```

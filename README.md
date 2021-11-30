# Docker image for @ng-apimock

## Usage
You can start the docker container manually
```
$ docker run --name my-mock-server -d ngapimock/standalone:latest -p 3000:3000 -v ./mocks:/opt/ngapimock/mocks -v ./extension.js:/opt/ngapimock/extension.js
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
      - ./extension.js:/opt/ngapimock/extension.js
```

## Port
```
3000
```

## Mocks
The mocks are read from your volume mount to /opt/ngapimock/mocks


## extension.js
The extension.js file is read from your volume mount to /opt/ngapimock/extension.js

This is an optional feature that can be used for instance for proxing your requests.
```js
module.exports = {
    extend: extend
}
function extend(app) {
    console.log("extending the server");

    const { createProxyMiddleware } = require('http-proxy-middleware');

    app.use('/some/path', createProxyMiddleware({ target: 'https://some.api',changeOrigin: true,timeout: 5000}));
}
```

## Documentation on ng-apimock
Documentation about ng-apimock can be found at https://github.com/ng-apimock/core

## Dev-interface
The [dev-interface](https://github.com/ng-apimock/core) can be accessed under:
```
http://localhost:3000/dev-interface
```

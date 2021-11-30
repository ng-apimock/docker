[@ng-apimock/core](https://github.com/ng-apimock/core) is also available as a [docker image](https://hub.docker.com/r/ngapimock/standalone) in combination with [@ng-apimock/dev-interface](https://github.com/ng-apimock/dev-interface).

### Running
You can start the docker container manually

```bash
$ docker run --name my-mock-server -d ngapimock/local:latest -p 3000:3000 -v ./mocks:/opt/ngapimock/mocks -v ./extension.js:/opt/ngapimock/extension.js
```
or through docker-compose

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

### Urls
- [@ng-apimock/core](https://github.com/ng-apimock/core) is available under http://localhost:3000
- [@ng-apimock/dev-interface](https://github.com/ng-apimock/dev-interface) can be accessed under: http://localhost:3000/dev-interface

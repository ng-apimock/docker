const apimock = require('@ng-apimock/core');
const express = require('express');
const devInterface = require('@ng-apimock/dev-interface');
const fs = require('fs-extra');
const path = require('path');
const app = express();

app.set('port', 3000);

// Process the test application mocks
apimock.processor.process({src: 'mocks', watch: true});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Use the ng-apimock middelware
app.use(apimock.middleware);

// Serve the web interface
app.use('/dev-interface', express.static(devInterface));

app.listen(app.get('port'), function () {
    console.log('@ng-apimock/core running on port', app.get('port'));
    console.log('@ng-apimock/dev-interface is available under /dev-interface');
});

// Check if there is an extension
if(fs.existsSync(path.join(process.cwd(), 'extension.js'))) {
    require(path.join(process.cwd(), 'extension')).extend(app);
}


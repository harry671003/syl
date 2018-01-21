const express = require('express');
const bodyParser = require('body-parser');
const appRootPath = require('app-root-path');

global.baseRequire = appRootPath.require;

const config = baseRequire('/config');
const logging = baseRequire('/app/infrastructure/logging');
const initializeRoutes = baseRequire('/app/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initializeRoutes(app, config, logging.createLogger(config));

app.listen(config.environment.port);

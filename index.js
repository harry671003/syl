const express = require('express');

const config = require('./config');
const logging = require('./app/infrastructure/logging');

const initializeRoutes = require('./app/routes');

const app = express();
initializeRoutes(app, config, logging.createLogger(config));

app.listen(config.environment.port);

const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const logging = require('./app/infrastructure/logging');

const initializeRoutes = require('./app/routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

initializeRoutes(app, config, logging.createLogger(config));

app.listen(config.environment.port);

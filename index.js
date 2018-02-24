const express = require('express');
const bodyParser = require('body-parser');
const appRootPath = require('app-root-path');

global.baseRequire = appRootPath.require;

const config = require('./config');
const syl = require('./app');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const startServer = async () => {
  await syl.initialize(app, config);
  app.listen(config.environment.port);
};

startServer();

const express = require('express');
const bodyParser = require('body-parser');
const appRootPath = require('app-root-path');

global.baseRequire = appRootPath.require;

const config = require('./config');
const syl = require('./app');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

syl.initialize(app, config, (error) => {
  if (error) {
    throw error;
  }

  app.listen(config.environment.port);
});

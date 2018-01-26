const async = require('async');

const logging = require('./infrastructure/logging');
const initializeRoutes = require('./routes');
const connectors = require('./connectors');

const initialize = (app, config, cb) => {
  const logger = logging.createLogger(config);

  initializeRoutes(app, config, logger);

  async.applyEach(connectors.initializers, config, cb);
};

module.exports = {
  initialize,
};

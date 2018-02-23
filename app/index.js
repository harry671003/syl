const bluebird = require('bluebird');
const logging = require('./infrastructure/logging');
const initializeRoutes = require('./routes');
const connectors = require('./connectors');

const initialize = async (app, config) => {
  const logger = logging.createLogger(config);

  initializeRoutes(app, config, logger);

  bluebird.map(connectors.initializers, async (initializer) => {
    await initializer(config);
  });
};

module.exports = {
  initialize,
};

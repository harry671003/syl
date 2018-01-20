const appInsights = require('applicationinsights');
const Logger = require('./logger');

module.exports = {
  createLogger: (config) => {
    appInsights.setup(config.appInsights.key)
      .setAutoDependencyCorrelation(true)
      .setAutoCollectRequests(true)
      .setAutoCollectExceptions(true)
      .setAutoCollectDependencies(true)
      .start();

    return new Logger(appInsights.defaultClient);
  },
};

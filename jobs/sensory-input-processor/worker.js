const appRootPath = require('app-root-path');

global.baseRequire = appRootPath.require;

const config = baseRequire('/config');
const ErrorHandler = baseRequire('/jobs/common/error-handler');
const logging = baseRequire('/app/infrastructure/logging');

const logger = logging.createLogger(config);

const errorHandler = new ErrorHandler(logger);
process.on('uncaughtException', errorHandler.handleError);

setInterval(() => {
  console.log('Executing myself.');
}, config.jobs.sensoryInputProcessor.pollingInterval);

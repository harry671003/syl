const appRootPath = require('app-root-path');

global.baseRequire = appRootPath.require;

const config = baseRequire('/config');

setInterval(() => {
  console.log('Executing myself.');
}, config.jobs.sensoryInputProcessor.pollingInterval);

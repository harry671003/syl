const deepmerge = require('deepmerge');

const settingsUndefined = () => {
  throw new Error('All required secrets are not defined');
};

const baseConfig = {
  environment: {
    port: process.env.SYL_PORT || process.env.PORT || 3000,
  },
  secrets: {
    telegram: {
      token: process.env.SYL_TELEGRAM_TOKEN || settingsUndefined(),
    },
    sendWebhook: {
      token: process.env.SYL_SEND_WEBHOOK_TOKEN || settingsUndefined(),
    },
  },
  connectors: {
    telegram: {
      apiUrl: `https://api.telegram.org/bot${process.env.SYL_TELEGRAM_BOT_TOKEN || settingsUndefined()}`,
    },
  },
  appInsights: {
    key: process.env.SYL_APPINSIGHTS_KEY || settingsUndefined(),
  },
  brain: { // azure storage account
    connStr: process.env.SYL_BRAIN_CONN || settingsUndefined(),
    sensoryInputQueue: {
      name: 'sensory-inputs',
    },
  },
};

const configExtensions = {
  DEV: {},
  PROD: {},
};

const buildConfig = () => {
  const environment = process.env.SYL_ENV || 'DEV';

  const configExt = configExtensions[environment];

  if (!configExt) {
    throw new Error('Invalid environemnt');
  }

  return deepmerge(baseConfig, configExt);
};

module.exports = buildConfig();

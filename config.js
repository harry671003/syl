module.exports = {
  environment: {
    port: process.env.SYL_PORT || process.env.PORT || 3000,
  },
  secrets: {
    telegram: {
      token: process.env.SYL_TELEGRAM_TOKEN,
    },
  },
  appInsights: {
    key: process.env.SYL_APPINSIGHTS_KEY,
  },
  brain: { // azure storage account
    connStr: process.env.SYL_BRAIN_CONN,
    sensoryInputQueue: {
      name: 'sensory-inputs',
    },
  },
  jobs: {
    sensoryInputProcessor: {
      pollingInterval: 5000,
    },
  },
};

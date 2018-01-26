const express = require('express');

const tokenAuth = baseRequire('/app/auth/token-auth');
const connectors = baseRequire('/app/connectors');

const configure = (config, logger) => {
  const router = express.Router();

  router.use(tokenAuth(config.secrets.sendWebhook.token));

  router.post('/', (request, response) => {
    logger.trackEvent('telegram_request', {
      'request-body': JSON.stringify(request.body, 2),
    });

    const connectorName = request.body.target;

    const connector = connectors[connectorName];

    if (!connector) {
      response.status(404).json({
        message: `Service: ${connectorName} is not registered.`,
      });

      return;
    }

    connector().send(request.body, () => {
      response.json({ message: 'sending' });
    });
  });

  return router;
};

module.exports = configure;

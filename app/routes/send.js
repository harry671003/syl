const express = require('express');

const tokenAuth = baseRequire('/app/auth/token-auth');
const connectors = baseRequire('/app/connectors');
const convSchema = baseRequire('/app/schemas/conv-schema');

const configure = (config, logger) => {
  const router = express.Router();

  router.use(tokenAuth(config.secrets.sendWebhook.token));

  router.post('/', async (request, response) => {
    logger.trackEvent('telegram_request', {
      'request-body': JSON.stringify(request.body, 2),
    });

    const message = request.body;

    const { error } = convSchema.validate(message);
    if (error) {
      // Validation failed
      response.status(400).json({
        message: 'Bad request.',
        error: error.details,
      });
    }


    const connectorName = message.source.client;

    const connector = connectors[connectorName];

    if (!connector) {
      response.status(404).json({
        message: `Service: ${connectorName} is not registered.`,
      });

      return;
    }

    await connector().send(message);
    response.json({ message: 'success' });
  });

  return router;
};

module.exports = configure;

const express = require('express');

const telegramConnector = baseRequire('/app/connectors/telegram');

module.exports = function configureReceiveRoutes(config, logger) {
  const router = express.Router();

  router.post('/telegram', (request, response) => {
    logger.trackEvent('telegram_request', {
      'request-body': JSON.stringify(request.body, 2),
    });

    if (request.query.token === config.secrets.telegram.token) {
      const connector = telegramConnector.instance;

      connector.processUpdate(request.body, (error) => {
        if (!error) {
          response.json({
            message: 'Successfully registered input.',
          });
        } else {
          throw new Error('Unable to process');
        }
      });
    } else {
      response.status(401).json({
        message: 'Invalid token',
      });
    }
  });

  return router;
};

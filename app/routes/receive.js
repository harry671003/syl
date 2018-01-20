const express = require('express');

module.exports = function configureReceiveRoutes(config, logger) {
  const router = express.Router();

  router.post('/telegram', (request, response) => {
    logger.trackEvent('telegram_request', {
      'request-body': JSON.stringify(request.body, 2),
    });

    if (request.query.token === config.secrets.telegram.token) {
      response.json({
        message: 'Hello, welcome to my server',
      });
    } else {
      response.status(401).json({
        message: 'Invalid token',
      });
    }
  });

  return router;
};

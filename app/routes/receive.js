const express = require('express');

const connectors = baseRequire('/app/connectors');

const configure = (config, logger) => {
  // Service registrations.
  const services = {
    telegram: {
      connector: connectors.telegram,
      token: config.secrets.telegram.token,
    },
  };

  const router = express.Router();

  router.post('/:serviceName', async (request, response) => {
    // Auth.
    const { serviceName } = request.params;
    const service = services[serviceName];

    if (!service) {
      response.status(404).json({
        message: `Service: ${serviceName} is not registered.`,
      });

      return;
    }

    const { connector, token } = service;

    if (request.query.token !== token) {
      response.status(401).json({
        message: 'Invalid token.',
      });

      return;
    }

    logger.trackEvent(`${serviceName}_request`, {
      'request-body': JSON.stringify(request.body, 2),
    });

    await connector().receive(request.body);
    response.json({
      message: 'Successfully registered input.',
    });
  });

  return router;
};

module.exports = configure;

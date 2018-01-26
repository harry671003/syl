const configureReceiveRoutes = require('./receive');

module.exports = function initializeRoutes(app, config, logger) {
  app.get('/ping', (request, response) => response.send('pong'));
  app.get('/', (request, response) => response.send('Hey, Syl here!'));

  // Receive routes
  app.use('/connectors/receive', configureReceiveRoutes(config, logger));
};

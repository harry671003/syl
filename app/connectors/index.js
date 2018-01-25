const telegramConnector = require('./telegram');

module.exports = {
  initializers: [
    telegramConnector.initialize,
  ],
};

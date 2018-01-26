const telegram = require('./telegram');

module.exports = {
  initializers: [
    telegram.initialize,
  ],
  telegram: telegram.getInstance,
};

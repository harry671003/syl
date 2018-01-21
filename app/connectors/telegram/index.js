const Queue = baseRequire('/app/infrastructure/storage/queue');
const mapper = require('./mapper');

function TelegramConnector(config) {
  this.queueConn = new Queue(config.brain.accountName);
  this.queueName = config.brain.sensoryInputQueue;
}

TelegramConnector.prototype.processUpdate = function processUpdate(update) {
  const sensoryInput = mapper.mapFromTelegramInputToSensoryInput(update);
  console.log(sensoryInput);
};

module.exports = TelegramConnector;

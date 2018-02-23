const Queue = baseRequire('/app/infrastructure/storage/queue');

function MessagePerceptor(config) {
  this.sensoryInputQ = new Queue(
    config.brain.connStr,
    config.brain.sensoryInputQueue.name,
  );
}

MessagePerceptor.prototype.initialize = async function init() {
  await this.sensoryInputQ.initialize();
};

MessagePerceptor.prototype.sense = async function sense(perception) {
  await this.sensoryInputQ.sendMessage(perception);
};

module.exports = MessagePerceptor;

const Queue = baseRequire('/app/infrastructure/storage/queue');
const convSchema = baseRequire('/app/schemas/conv-schema');

function MessagePerceptor(config) {
  this.sensoryInputQ = new Queue(
    config.brain.connStr,
    config.brain.sensoryInputQueue.name,
  );
}

MessagePerceptor.prototype.initialize = async function init() {
  await this.sensoryInputQ.initialize();
};

MessagePerceptor.prototype.sense = async function sense(input) {
  const { error } = convSchema.validate(input);
  if (error) {
    throw error.details;
  }
  await this.sensoryInputQ.sendMessage(input);
};

module.exports = MessagePerceptor;

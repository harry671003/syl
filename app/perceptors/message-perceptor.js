const Queue = baseRequire('/app/infrastructure/storage/queue');

function MessagePerceptor(config) {
  this.sensoryInputQ = new Queue(
    config.brain.connStr,
    config.brain.sensoryInputQueue.name,
  );
}

MessagePerceptor.prototype.initialize = function init(cb) {
  this.sensoryInputQ.initialize(cb);
};

MessagePerceptor.prototype.sense = function Register(perception, cb) {
  this.sensoryInputQ.sendMessage(perception, cb);
};

module.exports = MessagePerceptor;

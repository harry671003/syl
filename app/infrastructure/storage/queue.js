const azureStorage = require('azure-storage');

function Queue(connectionString, queueName) {
  // Queue Interface.
  this.queueSvc = azureStorage.createQueueService(connectionString);
  this.queueName = queueName;
}

Queue.prototype.initialize = function init(cb) {
  this.queueSvc.createQueueIfNotExists(
    this.queueName,
    cb,
  );
};


Queue.prototype.sendMessage = function send(message, cb) {
  this.queueSvc.createMessage(
    this.queueName,
    JSON.stringify(message),
    cb,
  );
};

module.exports = Queue;

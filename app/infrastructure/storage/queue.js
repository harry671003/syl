const azureStorage = require('azure-storage');
const bluebird = require('bluebird');

bluebird.promisifyAll(azureStorage.QueueService.prototype);

function Queue(connectionString, queueName) {
  // Queue Interface.
  this.queueSvc = azureStorage.createQueueService(connectionString);
  this.queueName = queueName;
}

Queue.prototype.initialize = async function init() {
  await this.queueSvc.createQueueIfNotExistsAsync(this.queueName);
};

Queue.prototype.sendMessage = async function send(message) {
  await this.queueSvc.createMessageAsync(
    this.queueName,
    JSON.stringify(message),
  );
};

module.exports = Queue;

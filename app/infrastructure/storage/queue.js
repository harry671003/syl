const azureStorage = require('azure-storage');

function Queue(connectionString) {
  // Queue Interface.
  this.queueSvc = azureStorage.createQueueService(connectionString);
}

module.exports = Queue;

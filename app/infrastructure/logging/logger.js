function Logger(client) {
  this.client = client;
}

Logger.prototype.trackEvent = function trackEvent(name, props) {
  this.client.trackEvent({
    name,
    properties: props,
  });
};

module.exports = Logger;

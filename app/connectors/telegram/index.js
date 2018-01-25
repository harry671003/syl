const mapper = require('./mapper');

const MessagePerceptor = baseRequire('/app/perceptors/message-perceptor');

function TelegramConnector(perceptor) {
  this.perceptor = perceptor;
}

TelegramConnector.prototype.processUpdate = function processUpdate(update, cb) {
  const sensoryInput = mapper.mapFromTelegramInputToSensoryInput(update);

  this.perceptor.sense(sensoryInput, cb);
};

const singleton = {
  initialize: function initialize(config, cb) {
    const perceptor = new MessagePerceptor(config);

    perceptor.initialize((error) => {
      if (!error) {
        singleton.instance = new TelegramConnector(perceptor);
      }

      cb(error);
    });
  },
  instance: null,
};

module.exports = singleton;

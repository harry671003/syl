const axios = require('axios');

const mapper = require('./mapper');

const MessagePerceptor = baseRequire('/app/perceptors/message-perceptor');

function TelegramConnector(config, perceptor) {
  this.perceptor = perceptor;
  this.telegramApiUrl = config.connectors.telegram.apiUrl;
}

TelegramConnector.prototype.receive = function receive(update, cb) {
  const sensoryInput = mapper.mapFromTelegramInputToSensoryInput(update);

  this.perceptor.sense(sensoryInput, cb);
};

TelegramConnector.prototype.send = function send(message, cb) {
  axios.post(`${this.telegramApiUrl}/sendMessage`, {
    chat_id: message.body.chat_id,
    text: message.body.text,
  }).then((response) => {
    console.log(response.data);
    cb();
  }).catch(cb);
};

const connector = {
  initialize: (config, cb) => {
    const perceptor = new MessagePerceptor(config);

    perceptor.initialize((error) => {
      if (!error) {
        this.instance = new TelegramConnector(config, perceptor);
      }

      cb(error);
    });
  },
  getInstance: () => this.instance,
};

module.exports = connector;

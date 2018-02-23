const axios = require('axios');

const mapper = require('./mapper');

const MessagePerceptor = baseRequire('/app/perceptors/message-perceptor');

function TelegramConnector(config, perceptor) {
  this.perceptor = perceptor;
  this.telegramApiUrl = config.connectors.telegram.apiUrl;
}

TelegramConnector.prototype.receive = async function receive(update) {
  const sensoryInput = mapper.mapFromTelegramInputToSensoryInput(update);

  await this.perceptor.sense(sensoryInput);
};

TelegramConnector.prototype.send = async function send(message) {
  await axios.post(`${this.telegramApiUrl}/sendMessage`, {
    chat_id: message.body.chat_id,
    text: message.body.text,
  });
};

const connector = {
  initialize: async (config) => {
    const perceptor = new MessagePerceptor(config);
    await perceptor.initialize();

    this.instance = new TelegramConnector(config, perceptor);
  },
  getInstance: () => this.instance,
};

module.exports = connector;

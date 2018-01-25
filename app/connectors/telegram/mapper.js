const SensoryInput = baseRequire('/app/models/sensory-input');

function mapFromTelegramInputToSensoryInput(update) {
  return new SensoryInput({
    type: 'chat',
    source: 'telegram',
    body: update,
  });
}

module.exports = {
  mapFromTelegramInputToSensoryInput,
};

const SensoryInput = baseRequire('/app/models/sensory-input');

function mapFromTelegramInputToSensoryInput() {
  return new SensoryInput({
    type: 'chat',
    source: 'telegram',
  });
}

module.exports = {
  mapFromTelegramInputToSensoryInput,
};

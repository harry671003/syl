function mapFromTelegramInputToSensoryInput(update) {
  return {
    content: {
      value: update.message.text,
      type: 'text',
    },
    source: {
      client: 'telegram',
      person: {
        personId: `telegram-users-${update.message.from.id}`,
        firstName: update.message.from.first_name,
        lastName: update.message.from.last_name,
        kind: update.message.from.is_bot ? 'bot' : 'human',
      },
    },
    sourceInput: update,
  };
}

module.exports = {
  mapFromTelegramInputToSensoryInput,
};

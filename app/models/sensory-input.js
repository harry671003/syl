const ModelBase = require('./model-base');

function SensoryInput(data) {
  if (!this.validateAndSetData(data)) {
    throw new Error('Model invalid');
  }
}

SensoryInput.prototype = Object.create(ModelBase.prototype);

SensoryInput.prototype.schema = {
  type: {
    required: true,
  },
  source: {
    required: true,
  },
  blah: {
    required: false,
  },
};

module.exports = SensoryInput;

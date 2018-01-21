function ModelBase(schema) {
  this.schema = schema;
}

ModelBase.prototype.validateAndSetData = function validateAndSetData(data) {
  let result = true;

  const keys = Object.keys(this.schema);

  for (let i = 0; i < keys.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(data, keys[i])) {
      if (this.schema[keys[i]].required === true) {
        result = false;
        break;
      }
    }

    this[keys[i]] = data[keys[i]];
  }

  return result;
};

module.exports = ModelBase;

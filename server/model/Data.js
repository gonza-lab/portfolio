const { Schema, model } = require('mongoose');

const DataSchema = new Schema(
  {},
  { strict: false, collection: 'data', strictQuery: false }
);

module.exports = model('Data', DataSchema);

const { Schema, model } = require('mongoose');

const AppSchema = new Schema({}, { strict: false, strictQuery: false });

module.exports = model('App', AppSchema);

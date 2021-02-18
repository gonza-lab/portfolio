const joi = require('joi');

const send = joi.object({
  from: joi.string().required(),
  name: joi.string().required(),
  subject: joi.string().required(),
  text: joi.string().required(),
});

module.exports = { send };

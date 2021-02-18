const { Router } = require('express');
const mail_controller = require('../controller/mail-controller');
const joi = require('../middleware/joi');
const mail_schema = require('../joi/mail');

const route = Router();

route.post('/', joi.validator(mail_schema.send, 'body'), mail_controller.send);

module.exports = route;

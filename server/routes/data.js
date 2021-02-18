const { Router } = require('express');
const data_controller = require('../controller/data-controller');

const route = Router();

route.get('/', data_controller.read);

module.exports = route;

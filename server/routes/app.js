const { Router } = require('express');
const app_controller = require('../controller/app-controller');

const route = Router();

route.get('/', app_controller.read);

module.exports = route;

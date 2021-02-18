const express = require('express');
const img_controller = require('../controller/img-controller');
const route = express.Router();

route.get('/app/:app_name/:img_name', img_controller.readImgApp);

module.exports = route;

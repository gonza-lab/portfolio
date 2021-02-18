const { request, response } = require('express');
const app_service = require('../services/app-service');

const read = async (req = request, res = response) => {
  let code = 200;
  let resContent = {};

  try {
    resContent = await app_service.read();
  } catch (error) {
    code = error.statusCode || 500;
    resContent = {
      error:
        error.errorMessage ||
        'Ha ocurrido un error. Hable con el administrador',
    };
  }

  res.status(code).json(resContent);
};

module.exports = { read };

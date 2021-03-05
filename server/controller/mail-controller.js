const { request, response } = require('express');
const mail_service = require('../services/mail-service');

const send = async (req = request, res = response) => {
  let code = 200;
  let resContent = { ok: true };
  const { body } = req;

  try {
    await mail_service.send(body);
  } catch (error) {
    console.log(error);
    code = error.statusCode || 500;
    resContent = {
      ok: false,
      error:
        error.errorMessage ||
        'Ha ocurrido un error. Hable con el administrador',
    };
  }

  res.status(code).json(resContent);
};

module.exports = { send };

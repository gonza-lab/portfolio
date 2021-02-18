const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: 'gonzaflores358@gmail.com',
  to: 'gonzaflores358@gmail.com',
};

const send = async (mail) => {
  transporter.sendMail(
    {
      ...mail,
      ...mailOptions,
      text: `De: ${mail.from}. Nombre: ${mail.name}. ${mail.text}`,
    },
    function (err, data) {
      if (err) {
        return new Error('No se ha podido enviar.');
      }
    }
  );
};

module.exports = { send };

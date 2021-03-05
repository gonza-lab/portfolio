const createTransporter = require('../mailer/createTransporter');

let mailOptions = {
  from: 'gonzaflores358@gmail.com',
  to: 'gonzaflores358@gmail.com',
};

const send = async (mail) => {
  const transporter = await createTransporter();

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

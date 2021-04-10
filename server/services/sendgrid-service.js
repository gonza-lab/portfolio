const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const send = async (msg) =>
  await sgMail.send({
    to: msg.from,
    from: process.env.SENDGRID_FROM,
    subject: msg.subject,
    text: `De: ${msg.from}. Nombre: ${msg.name}. ${msg.text}`,
  });

module.exports = { send };

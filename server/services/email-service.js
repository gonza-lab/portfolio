const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const send = async (msg = { to: '', subject: '', text: '', html: '' }) =>
  await sgMail.send({
    ...msg,
    from: process.env.SENDGRID_FROM,
  });

module.exports = { send };
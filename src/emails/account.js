const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const sendWelcomeEMail = (email, name) => {
  console.log(email, name);
  sgMail.send({
    to: email,
    from: "ashutoshthakur1409@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name} . Let me now how do you want to get along with the app`,
  });
};

const sendCancelationEMail = (email, name) => {
  sgMail.send({
    to: email,
    from: "ashutoshthakur1409@gmail.com",
    subject: "Why are you Leaving us ?",
    text: `Please reply in which service we are lacking so to improve our services in future, Sayonara ${name}`,
  });
};

module.exports = {
  sendWelcomeEMail,
  sendCancelationEMail,
};

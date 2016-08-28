function send(cfg, cb) {
  var nodemailer = require('nodemailer');
  var _ = require('underscore');

  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: 'slimptasktracker@gmail.com',
      pass: '4a3b4d44'
    }
  };
  var transporter = nodemailer.createTransport(smtpConfig);
  var mailOptions = {
    from: '"Task Tracker Slimp" <info@slimp.com>' // sender address
    // subject: 'Its work ✔', // Subject line
    // to: 'devastor@bk.ru',
    // text: 'Hello world 🐴', // plaintext body
    // html: '<b>Hello world 🐴 its work</b>' // html body
  };
  console.log(_.extend(mailOptions, cfg));

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //   console.log('Message sent: ' + info.response);
  // });

}
module.exports = {
  send: send
};

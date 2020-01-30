const nodemailer = require('nodemailer');

const sendEmail = async (options)=>{
  let transporter = nodemailer.createTransport({
    host : "smtp.mailtrap.io",
    port: 2525,
    auth :{
      user : process.env.MY_EMAIL,
      pass : process.env.MY_PASS,
    }

  });

  let mailOptions = {
    from : ' " FBW3 web development " < info@dci.com >  ',
    to: options.email,
    subject: options.subject,
    text : options.message,
    html : `click <a href = ${options.resetUrl}>  here </a>  to reset your password`
  }

  // send the email 
  await transporter.sendMail(mailOptions)
}

module.exports = sendEmail;

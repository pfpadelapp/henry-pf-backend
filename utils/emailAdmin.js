'use strict'

require('dotenv').config()
const nodemailer = require('nodemailer')

function createTrans() {
  const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com', // 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_MAIL, // 'afton89@ethereal.email', //
      pass: process.env.PASS_MAIL // 'kChY5RUvWaZFbjQ4BG'
    }
  })
  return transport
}

async function sendMail(mail, body) {
  const transporter = createTrans()
  const info = await transporter.sendMail({
    from: '<pf.henry.padel@gmail.com>', // `<${mail}>`, // admin request to SuperAdmin
    to: `<${mail}>`, // 'afton89@ethereal.email',
    html: body
  })

  console.log('Message sent: %s', info.messageId)
}

module.exports = { sendMail }

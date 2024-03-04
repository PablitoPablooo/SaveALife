import { Transporter, createTransport } from 'nodemailer';

const mailSender: Transporter = createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "safealifepoland@gmail.com", //Sender gmail adres
    pass: "dtut ymqa orvo dfto", //App pass from Gmail account
  },
})

export default mailSender
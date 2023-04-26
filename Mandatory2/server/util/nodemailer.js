import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
    },
});

async function sendEmail(to, subject, message) {
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text: message,
    };
    await transporter.sendMail(mailOptions);
};

export { sendEmail };
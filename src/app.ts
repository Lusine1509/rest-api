
import dotenv from 'dotenv';

import nodemailer from 'nodemailer';



dotenv.config();




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL ,
        pass: process.env.PASSWORD 
    }
});


const mailOptions = {
    from: 'andriasyanlusine@gmail.com', 
    to: 'lusineandriasyan@yahoo.com', 
    subject: 'Nodemailer - Test',
    text: 'Wooohooo it works!!'
};


transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return console.log('Error occurs',err);
    }
    return console.log('Email sent!!!');
});
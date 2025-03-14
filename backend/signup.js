const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/signup', (req, res) => {
    const { email, password, country, phone } = req.body;
    
    // Save user data to database (pseudo code)
    // const userId = saveToDatabase(email, password, country, phone);
    
    // Send confirmation email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
    
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Email Confirmation',
        text: `Please confirm your email by clicking the following link: http://yourdomain.com/confirm-email?userId=${userId}`
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending confirmation email');
        }
        res.redirect('/');  // Redirect to index page after successful signup
    });
});

router.get('/confirm-email', (req, res) => {
    const { userId } = req.query;
    
    // Confirm user email in database (pseudo code)
    // confirmEmail(userId);
    
    res.redirect('/');  // Redirect to index page after successful email confirmation
});

module.exports = router;

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission: ${subject}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

app.post('/send-application', upload.single('resume'), async (req, res) => {
  const { name, email, phone, coverLetter, job } = req.body;
  const resume = req.file;

  const mailOptions = {
    from: email, // User's email in the 'from' field
    to: process.env.EMAIL_USER, // Your email in the 'to' field
    subject: `New Job Application: ${job}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Position: ${job}
      Cover Letter: ${coverLetter}
    `,
    attachments: [
      {
        filename: resume.originalname,
        content: resume.buffer
      }
    ],
    envelope: {
      from: process.env.EMAIL_USER, // Your email as the authenticated sender
      to: process.env.EMAIL_USER // Your email as the recipient
    }
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Application sent successfully' });
  } catch (error) {
    console.error('Error sending application:', error);
    res.status(500).json({ message: 'Failed to send application', error: error.message });
  }
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

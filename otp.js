const express = require('express');
const app = express();
const mongoose = require('mongoose');
const otpGenerator = require('otp-generator');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/otp-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the OTP schema
const otpSchema = new mongoose.Schema({
  userId: String,
  otpCode: String
});

// Create the OTP model
const Otp = mongoose.model('Otp', otpSchema);

// Generate a new OTP code
app.post('/generate-otp', (req, res) => {
  const userId = req.body.userId;
  const otpCode = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false });
  const otp = new Otp({ userId, otpCode });
  otp.save((err, otp) => {
    if (err) {
      res.status(500).send({ message: 'Error generating OTP' });
    } else {
      res.send({ otpCode });
    }
  });
});

// Verify OTP code
app.post('/verify-otp', (req, res) => {
  const userId = req.body.userId;
  const otpCode = req.body.otpCode;
  Otp.findOne({ userId, otpCode }, (err, otp) => {
    if (err) {
      res.status(404).send({ message: 'Invalid OTP' });
    } else if (!otp) {
      res.status(404).send({ message: 'Invalid OTP' });
    } else {
      res.send({ message: 'OTP verified successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('OTP backend server listening on port 3000');
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body-parser middleware to handle form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection (replace <your_db_url> with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/signupDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Check connection
mongoose.connection.once('open', () => {
  console.log("Connected to MongoDB successfully!");
});

// User schema for storing signup details
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// User model
const User = mongoose.model('User', userSchema);

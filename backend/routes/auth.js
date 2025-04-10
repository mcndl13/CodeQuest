const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`[REGISTER] Failed - Email already in use: ${email}`);
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(`[REGISTER] Success - New user created: ${email}`);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(`[REGISTER] Error: ${err.message}`);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`[LOGIN] Failed - No user with email: ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`[LOGIN] Failed - Wrong password for: ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log(`[LOGIN] Success - ${email} logged in`);
    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(`[LOGIN] Error: ${err.message}`);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

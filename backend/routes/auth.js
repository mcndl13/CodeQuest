const express = require('express');
const router = express.Router();
const User = require('../models/user'); // User model for database operations
const bcrypt = require('bcrypt'); // Library for hashing passwords

// Register route
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body; // Extract user details from request body

  try {
    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log(`[REGISTER] Failed - Email already in use: ${email}`);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the user's password for security
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    console.log(`[REGISTER] Success - New user created: ${email}`);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    console.error(`[REGISTER] Error: ${err.message}`);
    res.status(500).json({ message: 'Server error' }); // Handle server errors
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body; // Extract login credentials from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`[LOGIN] Failed - No user with email: ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' }); // User not found
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(`[LOGIN] Failed - Wrong password for: ${email}`);
      return res.status(400).json({ message: 'Invalid credentials' }); // Password mismatch
    }

    console.log(`[LOGIN] Success - ${email} logged in`);
    res.status(200).json({ message: 'Login successful' }); // Successful login
  } catch (err) {
    console.error(`[LOGIN] Error: ${err.message}`);
    res.status(500).json({ message: 'Server error' }); // Handle server errors
  }
});

module.exports = router;

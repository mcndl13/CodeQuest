const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB connection
const cors = require('cors'); // Import CORS for cross-origin requests
const authRoutes = require('./routes/auth'); // Import authentication routes
require('dotenv').config(); // Load environment variables from .env file

const app = express(); // Initialize Express app
const PORT = process.env.PORT || 3000; // Define server port

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected')) 
  .catch(err => console.error(err)); 

// Root route
app.get('/', (req, res) => {
  res.send('Server is running'); 
});

// Authentication routes
app.use("/api/auth", authRoutes); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); 
});



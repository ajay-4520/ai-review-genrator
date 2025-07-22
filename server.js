   // server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse incoming JSON

// Configuration
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Atlas connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    // Retry after 5 seconds if it fails
    setTimeout(connectDB, 5000);
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB disconnected! Reconnecting...');
  connectDB();
});

connectDB(); // Initial connect

// Schema & Model
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    loginType: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

// ---------------- API ROUTES ----------------

// Save user login (Google or email/password)
app.post('/api/sign', async (req, res) => {
  try {
    const { name, email, method } = req.body;

    if (!email || !method) {
      return res.status(400).json({ message: 'Missing required fields: email or method' });
    }

    const user = new User({ name, email, loginType: method });
    await user.save();

    res.status(201).json({ message: '✅ User saved successfully' });
  } catch (err) {
    console.error('❌ Error saving user:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all users (for admin or dashboard)
app.get('/api/logins', async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// ---------------- START SERVER ----------------

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

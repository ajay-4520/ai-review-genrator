 // server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/AI-review', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected Successfully to AI-review'))
.catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Import model
const User = require('./models/User'); // ✅ Correct path

// ✅ Route: Sign-in / Sign-up
app.post('/api/sign', async (req, res) => {
  try {
    const { email, password, method } = req.body;

    if (!email || !method) {
      return res.status(400).json({ message: 'Email and method are required' });
    }

    // 🔐 Email/Password method
    if (method === 'Email/Password') {
      if (!password) {
        return res.status(400).json({ message: 'Password is required' });
      }

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
        return res.status(200).json({ message: '✅ Login successful' });
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, method });
        await newUser.save();
        return res.status(201).json({ message: '✅ User registered and logged in' });
      }
    }

    // 🔐 Google Sign-in method
    else if (method === 'Google') {
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        const newUser = new User({ email, method: 'Google' });
        await newUser.save();
        return res.status(201).json({ message: '✅ Google user registered' });
      } else {
        return res.status(200).json({ message: '✅ Google user logged in' });
      }
    }

    // ❌ Invalid method
    else {
      return res.status(400).json({ message: 'Invalid method provided' });
    }

  } catch (err) {
    console.error('❌ Error in /api/sign:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
});

// ✅ Admin route: get all signed users
app.get('/api/admin/signed-users', async (req, res) => {
  try {
    const users = await User.find().sort({ time: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error('❌ Error fetching users:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

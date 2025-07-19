 // models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String }, // Only for email/password login
  method: { type: String, required: true }, // 'Email/Password' or 'Google'
  time: { type: Date, default: Date.now }
}, {
  collection: 'emails'
});

module.exports = mongoose.model('User', userSchema);

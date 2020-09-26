const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: Number, required: true, default: null },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    default: null
  }
});

module.exports = mongoose.model('User', userSchema);

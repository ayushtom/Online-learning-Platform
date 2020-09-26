const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  v_name: { type: String, required: true },
  video: { type: String, required: true },
  v_details: String,
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Video', videoSchema);

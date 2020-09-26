const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  v_name: { type: String, required: true },
  video: { type: String, required: true },
  v_details: String
});

module.exports = mongoose.model('Video', videoSchema);

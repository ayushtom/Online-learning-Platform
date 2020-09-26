const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  content_name: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Content', contentSchema);

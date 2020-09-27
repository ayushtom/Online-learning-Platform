const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  content_name: { type: String, required: true },
  text: { type: String, required: true },
  code:{type:String,required:true},
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Content', contentSchema);

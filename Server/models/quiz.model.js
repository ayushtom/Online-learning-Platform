const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  quiz_name: { type: String, required: true },
  questions: [
    {
      q: { type: String, required: true },
      opt1: { type: String, required: true },
      opt2: { type: String, required: true },
      opt3: { type: String, required: true },
      opt4: { type: String, required: true },
      ans: { type: String, required: true }
    }
  ],
  marks:[
    {
      name:{type:String,required:true},
      marks:{type:Number,required:true}
    }
  ],
  date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Quiz', quizSchema);

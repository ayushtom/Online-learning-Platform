const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  rollno: { type: Number, required: true, unique: true },
  semester: { type: Number, required: true },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      default: null
    }
  ]
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;

const Profile = require('../models/profile.model');
const User = require('../models/user.model');

const add = async (req, res) => {
  try {
    const name = req.body.name;
    const rollno = Number(req.body.rollno);
    const semester = Number(req.body.semester);

    if (!name || !rollno || !semester)
      return res.status(400).json({ message: 'Please add all details' });

    const newProfile = new Profile({
      name,
      rollno,
      semester
    });

    const savedProfile = await newProfile.save();

    const user = await User.findById(req.user);
    if (!user) return res.status(400).json({ message: 'No such user found' });
    else {
      user.profile = savedProfile._id;
      user.save((err, users) => {
        if (err) res.json(err);
        else res.json(users);
      });
    }

    res.status(200).json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user, { profile: 1 }).populate(
      'profile'
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCourse = async (req, res) => {
  try {
    const c_id = req.body.c_id;
    const user = await User.findById(req.user);
    const pid = await user.profile;
    const profile = await Profile.findById(pid);
    let savedProfile;
    if (!profile) return res.status(400).json({ message: 'No profile found' });
    else {
      profile.courses.push(c_id);
      savedProfile = await profile.save();
      res.status(200).json(savedProfile);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.add = add;
exports.getProfile = getProfile;
exports.addCourse = addCourse;

const express = require('express')
const Profile = require('../models/profile.model');
const User = require('../models/user.model');
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const path = require('path')
const config = require('config');
const crypto = require('crypto');



const db = config.get('mongoURI');

// Create mongo connection
const conn = mongoose.createConnection(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {

        if (err) {
          return reject(err);
        }

        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);

      });
    });
  }
});

const upload = multer({ storage });




const add = async (req, res) => {
  try {
    const name=req.body.name;
    const email=req.body.email;
    const rollno = Number(req.body.rollno);
    const semester = Number(req.body.semester);
    const address = req.file.filename,
    const address_id = req.file.id,

    if (!name || !rollno || !semester)
      return res.status(400).json({ message: 'Please add all details' });

    const newProfile = new Profile({
      name,
      email,
      rollno,
      semester,
      address,
      address_id
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

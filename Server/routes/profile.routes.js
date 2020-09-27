<<<<<<< HEAD
const express = require('express')
const router = express.Router()
// const mongoose = require('mongoose')
// const multer = require('multer')
// const GridFsStorage = require('multer-gridfs-storage')
// const Grid = require('gridfs-stream')
// const path = require('path')
// const config = require('config');
// const crypto = require('crypto');
// const User = require('../models/profile.model');
const profileControllers = require('../controllers/profile.controller');
const auth = require('../middleware/auth');

// const db = config.get('mongoURI');

// // Create mongo connection
// const conn = mongoose.createConnection(db, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// });

// // Init gfs
// let gfs;

// conn.once('open', () => {
//   // Init stream
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection('uploads');
// });

// // Create storage engine
// const storage = new GridFsStorage({
//   url: db,
//   file: (req, file) => {
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {

//         if (err) {
//           return reject(err);
//         }

//         const filename = buf.toString('hex') + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: 'uploads'
//         };
//         resolve(fileInfo);

//       });
//     });
//   }
// });
=======
const router = require('express').Router();
// const express = require('express')
// const router = express.Router()
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const path = require('path');
const config = require('config');
const crypto = require('crypto');
const User = require('../models/profile.model');
const profileControllers = require('../controllers/profile.controller');
const auth = require('../middleware/auth');

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
>>>>>>> 63b3e91ce823a24e398d371459e872dd327a32ef

// const upload = multer({ storage });

<<<<<<< HEAD
// //uploading image
// router.post('/upload', upload.single('file'), (req, res) => {
    
//     const newImage = new User({
//       name:req.body.name,
//       email:req.body.email,
//       address : req.file.filename,
//       address_id : req.file.id,
  
//     })
  
//     newImage
//       .save()
//       .then(img => 
//           console.log('Image Saved')
//       )
//       .catch(err => console.log('Error in Image Uploading : '+err))
  
//     res.json({
//         file : req.file,
//         msg : 'Image uploaded successfully', 
//         success : true
//     });
  
//   })
=======
//uploading image
router.post('/upload', upload.single('file'), (req, res) => {
  const newImage = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.file.filename,
    address_id: req.file.id
  });
>>>>>>> 63b3e91ce823a24e398d371459e872dd327a32ef

  newImage
    .save()
    .then((img) => console.log('Image Saved'))
    .catch((err) => console.log('Error in Image Uploading : ' + err));

  res.json({
    file: req.file,
    msg: 'Image uploaded successfully',
    success: true
  });
});

//Displaying image

<<<<<<< HEAD
    gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename);
        readstream.pipe(res);
     
    });
=======
router.get('/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.json({
        success: false,
        msg: 'Image not found'
      });
    }

    // Check if image

    if (
      file.contentType === 'image/jpeg' ||
      file.contentType === 'image/png' ||
      file.contentType === 'image/jpg'
    ) {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.json({
        success: false,
        msg: 'Not an image'
      });
    }
>>>>>>> 63b3e91ce823a24e398d371459e872dd327a32ef
  });
});

// Adds a new profile
router.post('/add', auth, profileControllers.add);

//Gets a profile
router.get('/getProfile', auth, profileControllers.getProfile);

//Adds a course by getting course id
router.post('/addCourse', auth, profileControllers.addCourse);

// router.route('/add').post((req,res) =>{
//     const username=req.body.username;
//     const rollno=Number(req.body.rollno);
//     const semester=Number(req.body.semester);
//     // const courseref=req.body.courses;
//     const newProfile= new Profile(
//         {
//             username,
//             rollno,
//             semester,
//             courseref
//         });

//     newProfile.save()
//     .then(()=> res.json("Profile added"))
//     .catch(err => res.status(400).json('Error: '+err));
// });

// router.route('/update').post((req,res)=> {
//     Profile.findById(req.body.id)
//     .then(profile=> {
//         profile.username=req.body.username;
//         profile.rollno=Number(req.body.rollno);
//         profile.semester=Number(req.body.semester);
//         profile.courseref=req.body.courses;
//         profile.save()
//         .then(()=> res.json('Profile updated!'))
//         .catch(err => res.status(400).json('Error: '+err));

//     })
//     .catch(err => res.status(400).json('Error: '+err));
// });

module.exports = router;

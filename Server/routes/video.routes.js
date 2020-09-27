const Video=require('../models/video.model');
const express = require('express');
const mongoose = require('mongoose')
const multer = require('multer')
const GridFsStorage = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const path = require('path')
const config = require('config');
const crypto = require('crypto');

const router = express.Router();


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



router.route('/add').post((req,res)=>{
    try{
        const v_name=req.body.videoName;
        const v_details=req.body.description;
        const address = req.file.filename;
        const address_id = req.file.id;

        if (!v_name || !v_details) {
            return res
            .status(400)
            .json({ message: 'Please add video name and description.' });
        }

        const newVideo=new Video({
            v_name,
            v_details,
            address,
            address_id
        });

        const savedVideo = newVideo.save();
        res.status(200).json(savedVideo);

    }
    
   catch (error) {
    res.status(500).json({ message: error.message });
  }

})

module.exports=router;

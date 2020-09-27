const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//for fetching images
app.use('/api', require('./routes/profile.routes'));

const userRoute = require('./routes/user.route');
const profileRoute = require('./routes/profile.routes');
const courseRoute = require('./routes/course.routes');
const contentRoute=require('./routes/content.routes');
const videoRoute=require('./routes/video.routes');

app.use('/users', userRoute);
app.use('/profile', profileRoute);
app.use('/course', courseRoute);
app.use('/content',contentRoute);
app.use('/video',videoRoute);



app.listen(PORT, () => console.log(`The Server has started on port ${PORT}.`));

mongoose
  .connect('mongodb://localhost:27017/Hackathon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('MongoDB started.');
  })
  .catch((err) => {
    console.log(err);
  });

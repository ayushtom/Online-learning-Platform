const Course = require('../models/course.model');

//---------------------------------------------ADD COURSE DETAIL---------------------------------------------

const addCourseDetail = async (req, res) => {
  try {
    let { c_name, c_detail, c_img } = req.body;

    if (!c_name || !c_detail) {
      return res
        .status(400)
        .json({ message: 'Please add course name and description.' });
    }

    const newCourse = new Course({
      c_name,
      c_img,
      c_detail
    });

    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    Course.findByIdAndUpdate(
      req.params.c_id,
      {
        $set: req.body
      },
      (err, updatedCourse) => {
        if (!err) res.status(200).json(updatedCourse);
        else res.status(400).json(err);
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllCourse = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const addQuizResult = async (req, res) => {
//   try {
//     let { quiz_name, marks, attempt } = req.body;

//     if (!quiz_name || !marks || !attempt)
//       return res.status(400).json({ message: 'Add all fields' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

exports.addCourseDetail = addCourseDetail;
exports.getAllCourse = getAllCourse;
exports.updateCourse = updateCourse;

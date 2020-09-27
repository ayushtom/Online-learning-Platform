const Course = require('../models/course.model');
const Quiz = require('../models/quiz.model');

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

const addQuiz = async (req, res) => {
  const c_id = req.params.c_id;
  try {
    const newQuiz = new Quiz(req.body);
    const savedQuiz = await newQuiz.save();

    const course = await Course.findById(c_id);
    course.quiz.push(savedQuiz._id);
    const updatedCourse = await course.save();
    res.status(200).json({ u: updatedCourse, q: savedQuiz });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMarks = async (req, res) => {
  try {
    const q_id = req.params.q_id;
    const u_id = req.user;
    const m = req.body;
    const marksObj = { u_id, m };
    const quiz = await Quiz.findById(q_id);
    quiz.marks.push(marksObj);
    const updQuiz = await quiz.save();
    res.status(200).json(updQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMarks = async (req, res) => {
  try {
    const q_id = req.params.q_id;
    const u_id = req.user;
    const quiz = await Quiz.findById(q_id);
    // res.json(quiz.marks);
    const foundResult = quiz.marks.filter((obj) => obj.u_id === u_id);
    if (foundResult) {
      res.status(200).json(foundResult);
    } else {
      res.status(200).json({ attempt: false });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllQuiz = async (req, res) => {
  try {
    const c_id = req.params.c_id;
    const AllQuiz = await Course.findById(c_id, { quiz: 1 }).populate('quiz');
    res.status(200).json(AllQuiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMarks = async (req, res) => {
  try {
    const q_id = req.params.q_id;
    const quiz = await Quiz.findById(q_id).populate('marks.u_id');
    res.status(200).json(quiz.marks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addCourseDetail = addCourseDetail;
exports.getAllCourse = getAllCourse;
exports.updateCourse = updateCourse;
exports.addQuiz = addQuiz;
exports.getAllQuiz = getAllQuiz;
exports.addMarks = addMarks;
exports.getMarks = getMarks; //not working
exports.getAllMarks = getAllMarks; //not working

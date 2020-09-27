const router = require('express').Router();
const courseControllers = require('../controllers/course.controller');
const auth = require('../middleware/auth');

//Adds a course
router.post('/add', courseControllers.addCourseDetail);

//Updates a course
router.patch('/update/:c_id', courseControllers.updateCourse);

//gets all courses
router.get('/getAllCourse', courseControllers.getAllCourse);

//gets all quizes
router.get('/getAllQuiz/:c_id', auth, courseControllers.getAllQuiz);

//add a quiz
router.post('/addQuiz/:c_id', auth, courseControllers.addQuiz);

//add Marks
router.post('/addMark/:q_id', auth, courseControllers.addMarks);

//getMarks
router.get('/getMark/:q_id', auth, courseControllers.getMarks);

//getAllMarks
router.get('/getAllMarks/:q_id', courseControllers.getAllMarks);

module.exports = router;

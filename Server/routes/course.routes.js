const router = require('express').Router();
const courseControllers = require('../controllers/course.controller');
const auth = require('../middleware/auth');

//Adds a course
router.post('/add', courseControllers.addCourseDetail);

//Updates a course
router.patch('/update/:c_id', courseControllers.updateCourse);

//gets all courses
router.get('/getAll', courseControllers.getAllCourse);

module.exports = router;

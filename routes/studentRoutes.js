const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Routes for CRUD operations
router.get('/', studentController.getAllStudents);
router.get('/:email', studentController.getStudentByEmail);
router.post('/', studentController.createStudent);
router.put('/:email', studentController.updateStudentByEmail);
router.delete('/:email', studentController.deleteStudentByEmail);

// Export the router to use in the main app file
module.exports= router;

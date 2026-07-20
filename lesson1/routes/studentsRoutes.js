const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentsController');

// GET כל התלמידים
router.get('/', studentsController.getAllStudents);

// GET תלמיד בודד לפי id
router.get('/:id', studentsController.getStudentById);

// POST יצירת תלמיד חדש
router.post('/', studentsController.createStudent);

// PUT עדכון תלמיד קיים
router.put('/:id', studentsController.updateStudent);

// DELETE מחיקת תלמיד
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;

const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

// GET כל הקורסים
router.get('/', coursesController.getAllCourses);

// GET קורס בודד לפי id
router.get('/:id', coursesController.getCourseById);

// POST יצירת קורס חדש
router.post('/', coursesController.createCourse);

// PUT עדכון קורס קיים
router.put('/:id', coursesController.updateCourse);

// DELETE מחיקת קורס
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;

const coursesService = require('../services/coursesService');

// GET כל הקורסים
const getAllCourses = (req, res) => {
    res.json(coursesService.getAllCourses());
};

// GET קורס בודד לפי id
const getCourseById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = coursesService.getCourseById(id);

    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
};

// POST יצירת קורס חדש
const createCourse = (req, res) => {
    const newCourse = coursesService.createCourse({
        name: req.body.name,
        description: req.body.description
    });

    res.status(201).json(newCourse);
};

// PUT עדכון קורס קיים
const updateCourse = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedCourse = coursesService.updateCourse(id, {
        name: req.body.name,
        description: req.body.description
    });

    if (!updatedCourse) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json(updatedCourse);
};

// DELETE מחיקת קורס
const deleteCourse = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedCourse = coursesService.deleteCourse(id);

    if (!deletedCourse) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json({ message: 'Course deleted successfully', deletedItem: deletedCourse });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};

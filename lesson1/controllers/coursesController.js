const courses = require('../data/courses');

// GET כל הקורסים
const getAllCourses = (req, res) => {
    res.json(courses);
};

// GET קורס בודד לפי id
const getCourseById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
};

// POST יצירת קורס חדש
const createCourse = (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        description: req.body.description
    };

    courses.push(newCourse);
    res.status(201).json(newCourse);
};

// PUT עדכון קורס קיים
const updateCourse = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    course.name = req.body.name !== undefined ? req.body.name : course.name;
    course.description = req.body.description !== undefined ? req.body.description : course.description;

    res.json(course);
};

// DELETE מחיקת קורס
const deleteCourse = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const courseIndex = courses.findIndex(item => item.id === id);

    if (courseIndex === -1) {
        return res.status(404).json({ error: 'Course not found' });
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json({ message: 'Course deleted successfully', deletedItem: deletedCourse[0] });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};

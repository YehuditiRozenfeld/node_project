const courses = require('../data/courses');

const getAllCourses = () => courses;

const getCourseById = (id) => courses.find(item => item.id === id);

const createCourse = ({ name, description }) => {
    const newCourse = {
        id: courses.length + 1,
        name,
        description
    };
    courses.push(newCourse);
    return newCourse;
};

const updateCourse = (id, data) => {
    const course = getCourseById(id);
    if (!course) return null;

    course.name = data.name !== undefined ? data.name : course.name;
    course.description = data.description !== undefined ? data.description : course.description;

    return course;
};

const deleteCourse = (id) => {
    const index = courses.findIndex(item => item.id === id);
    if (index === -1) return null;
    return courses.splice(index, 1)[0];
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse
};

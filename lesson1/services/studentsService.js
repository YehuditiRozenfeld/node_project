const students = require('../data/students');

const getAllStudents = () => students;

const getStudentById = (id) => students.find(item => item.id === id);

const createStudent = ({ name, email }) => {
    const newStudent = {
        id: students.length + 1,
        name,
        email
    };
    students.push(newStudent);
    return newStudent;
};

const updateStudent = (id, data) => {
    const student = getStudentById(id);
    if (!student) return null;

    student.name = data.name !== undefined ? data.name : student.name;
    student.email = data.email !== undefined ? data.email : student.email;

    return student;
};

const deleteStudent = (id) => {
    const index = students.findIndex(item => item.id === id);
    if (index === -1) return null;
    return students.splice(index, 1)[0];
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

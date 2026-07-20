const students = require('../data/students');

// GET כל התלמידים
const getAllStudents = (req, res) => {
    res.json(students);
};

// GET תלמיד בודד לפי id
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
};

// POST יצירת תלמיד חדש
const createStudent = (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
};

// PUT עדכון תלמיד קיים
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    student.name = req.body.name !== undefined ? req.body.name : student.name;
    student.email = req.body.email !== undefined ? req.body.email : student.email;

    res.json(student);
};

// DELETE מחיקת תלמיד
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(item => item.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }

    const deletedStudent = students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully', deletedItem: deletedStudent[0] });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

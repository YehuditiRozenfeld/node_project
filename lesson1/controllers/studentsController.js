const studentsService = require('../services/studentsService');

// GET כל התלמידים
const getAllStudents = (req, res) => {
    res.json(studentsService.getAllStudents());
};

// GET תלמיד בודד לפי id
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = studentsService.getStudentById(id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
};

// POST יצירת תלמיד חדש
const createStudent = (req, res) => {
    const newStudent = studentsService.createStudent({
        name: req.body.name,
        email: req.body.email
    });

    res.status(201).json(newStudent);
};

// PUT עדכון תלמיד קיים
const updateStudent = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedStudent = studentsService.updateStudent(id, {
        name: req.body.name,
        email: req.body.email
    });

    if (!updatedStudent) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(updatedStudent);
};

// DELETE מחיקת תלמיד
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedStudent = studentsService.deleteStudent(id);

    if (!deletedStudent) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully', deletedItem: deletedStudent });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};

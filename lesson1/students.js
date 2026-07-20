const { Router } = require('express');

const router = Router();

const students = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

router.get('/', (req, res) => {
    res.json(students);
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
});

module.exports = router;

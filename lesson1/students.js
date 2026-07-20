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

module.exports = {
    router,
    students
};

const { Router } = require('express');

const router = Router();

const registrations = [
    { id: 1, studentId: 1, courseId: 3, status: 'registered' },
    { id: 2, studentId: 2, courseId: 1, status: 'registered' }
];

router.get('/', (req, res) => {
    res.json(registrations);
});

module.exports = {
    router,
    registrations
};

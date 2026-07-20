const registrations = require('../data/registrations');

// GET כל הרישומים
const getAllRegistrations = (req, res) => {
    res.json(registrations);
};

// GET רישום בודד לפי id
const getRegistrationById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registration = registrations.find(item => item.id === id);

    if (!registration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(registration);
};

// POST יצירת רישום חדש
const createRegistration = (req, res) => {
    const newRegistration = {
        id: registrations.length + 1,
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        status: req.body.status || 'registered'
    };

    registrations.push(newRegistration);
    res.status(201).json(newRegistration);
};

// PUT עדכון רישום קיים
const updateRegistration = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registration = registrations.find(item => item.id === id);

    if (!registration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    registration.studentId = req.body.studentId !== undefined ? req.body.studentId : registration.studentId;
    registration.courseId = req.body.courseId !== undefined ? req.body.courseId : registration.courseId;
    registration.status = req.body.status !== undefined ? req.body.status : registration.status;

    res.json(registration);
};

// DELETE מחיקת רישום
const deleteRegistration = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registrationIndex = registrations.findIndex(item => item.id === id);

    if (registrationIndex === -1) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    const deletedRegistration = registrations.splice(registrationIndex, 1);
    res.json({ message: 'Registration deleted successfully', deletedItem: deletedRegistration[0] });
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
};

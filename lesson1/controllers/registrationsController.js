const registrationsService = require('../services/registrationsService');

// GET כל ההרשמות
const getAllRegistrations = (req, res) => {
    res.json(registrationsService.getAllRegistrations());
};

// GET הרשמה בודדת לפי id
const getRegistrationById = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registration = registrationsService.getRegistrationById(id);

    if (!registration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(registration);
};

// POST יצירת הרשמה חדשה
const createRegistration = (req, res) => {
    const newRegistration = registrationsService.createRegistration({
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        status: req.body.status
    });

    res.status(201).json(newRegistration);
};

// PUT עדכון הרשמה קיימת
const updateRegistration = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const updatedRegistration = registrationsService.updateRegistration(id, {
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        status: req.body.status
    });

    if (!updatedRegistration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(updatedRegistration);
};

// DELETE מחיקת הרשמה
const deleteRegistration = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const deletedRegistration = registrationsService.deleteRegistration(id);

    if (!deletedRegistration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    res.json({ message: 'Registration deleted successfully', deletedItem: deletedRegistration });
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
};

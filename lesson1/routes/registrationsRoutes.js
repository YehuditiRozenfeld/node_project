const express = require('express');
const router = express.Router();
const registrationsController = require('../controllers/registrationsController');

// GET כל הרישומים
router.get('/', registrationsController.getAllRegistrations);

// GET רישום בודד לפי id
router.get('/:id', registrationsController.getRegistrationById);

// POST יצירת רישום חדש
router.post('/', registrationsController.createRegistration);

// PUT עדכון רישום קיים
router.put('/:id', registrationsController.updateRegistration);

// DELETE מחיקת רישום
router.delete('/:id', registrationsController.deleteRegistration);

module.exports = router;

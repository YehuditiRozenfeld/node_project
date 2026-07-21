const registrations = require('../data/registrations');

const getAllRegistrations = () => registrations;

const getRegistrationById = (id) => registrations.find(item => item.id === id);

const createRegistration = ({ studentId, courseId, status }) => {
    const newRegistration = {
        id: registrations.length + 1,
        studentId,
        courseId,
        status: status || 'registered'
    };
    registrations.push(newRegistration);
    return newRegistration;
};

const updateRegistration = (id, data) => {
    const registration = getRegistrationById(id);
    if (!registration) return null;

    registration.studentId = data.studentId !== undefined ? data.studentId : registration.studentId;
    registration.courseId = data.courseId !== undefined ? data.courseId : registration.courseId;
    registration.status = data.status !== undefined ? data.status : registration.status;

    return registration;
};

const deleteRegistration = (id) => {
    const index = registrations.findIndex(item => item.id === id);
    if (index === -1) return null;
    return registrations.splice(index, 1)[0];
};

module.exports = {
    getAllRegistrations,
    getRegistrationById,
    createRegistration,
    updateRegistration,
    deleteRegistration
};

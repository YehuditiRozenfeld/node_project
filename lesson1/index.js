const express = require('express');
const { default: chalk } = require('chalk');
const { router: coursesRouter, courses } = require('./courses');
const { router: studentsRouter, students } = require('./students');
const { router: registrationsRouter, registrations } = require('./registrations');

const app = express();
const port = process.env.PORT || 3000;

// חייבים לקרוא ל-express.json לפני הגדרת הנתיבים כדי שהבקשות עם body יתקבלו כ JSON.
app.use(express.json());

// פעולה שנייה: GET של רשימת כל הישויות
app.get('/courses', (req, res) => {
    res.json(courses);
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.get('/registrations', (req, res) => {
    res.json(registrations);
});

// פעולה שלישית: POST ליצירת פריט חדש בכל ישות
app.post('/courses', (req, res) => {
    const newCourse = {
        id: courses.length + 1,
        name: req.body.name,
        description: req.body.description
    };

    courses.push(newCourse);
    res.status(201).json(newCourse);
});

app.post('/students', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        email: req.body.email
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.post('/registrations', (req, res) => {
    const newRegistration = {
        id: registrations.length + 1,
        studentId: req.body.studentId,
        courseId: req.body.courseId,
        status: req.body.status || 'registered'
    };

    registrations.push(newRegistration);
    res.status(201).json(newRegistration);
});

// פעולה ראשונה: GET של אובייקט בודד לכל ישות
app.get('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    res.json(course);
});

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
});

app.get('/registrations/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registration = registrations.find(item => item.id === id);

    if (!registration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    res.json(registration);
});

// פעולה רביעית: PUT לעדכון פריט קיים בכל ישות
app.put('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const course = courses.find(item => item.id === id);

    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }

    course.name = req.body.name !== undefined ? req.body.name : course.name;
    course.description = req.body.description !== undefined ? req.body.description : course.description;

    res.json(course);
});

app.put('/students/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const student = students.find(item => item.id === id);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    student.name = req.body.name !== undefined ? req.body.name : student.name;
    student.email = req.body.email !== undefined ? req.body.email : student.email;

    res.json(student);
});

app.put('/registrations/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registration = registrations.find(item => item.id === id);

    if (!registration) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    registration.studentId = req.body.studentId !== undefined ? req.body.studentId : registration.studentId;
    registration.courseId = req.body.courseId !== undefined ? req.body.courseId : registration.courseId;
    registration.status = req.body.status !== undefined ? req.body.status : registration.status;

    res.json(registration);
});

// פעולה חמישית: DELETE למחיקת פריט קיים בכל ישות
app.delete('/courses/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const courseIndex = courses.findIndex(item => item.id === id);

    if (courseIndex === -1) {
        return res.status(404).json({ error: 'Course not found' });
    }

    const deletedCourse = courses.splice(courseIndex, 1);
    res.json({ message: 'Course deleted successfully', deletedItem: deletedCourse[0] });
});

app.delete('/students/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const studentIndex = students.findIndex(item => item.id === id);

    if (studentIndex === -1) {
        return res.status(404).json({ error: 'Student not found' });
    }

    const deletedStudent = students.splice(studentIndex, 1);
    res.json({ message: 'Student deleted successfully', deletedItem: deletedStudent[0] });
});

app.delete('/registrations/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const registrationIndex = registrations.findIndex(item => item.id === id);

    if (registrationIndex === -1) {
        return res.status(404).json({ error: 'Registration not found' });
    }

    const deletedRegistration = registrations.splice(registrationIndex, 1);
    res.json({ message: 'Registration deleted successfully', deletedItem: deletedRegistration[0] });
});

app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);
app.use('/registrations', registrationsRouter);

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Express server is running',
        description: 'This server supports REST routes for courses, students and registrations.'
    });
});

app.listen(port, () => {
    console.log(chalk.bgYellow.black(`Server is running at http://localhost:${port}`));
});


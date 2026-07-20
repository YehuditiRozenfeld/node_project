const express = require('express');
const { default: chalk } = require('chalk');
const coursesRoutes = require('./routes/coursesRoutes');
const studentsRoutes = require('./routes/studentsRoutes');
const registrationsRoutes = require('./routes/registrationsRoutes');

const app = express();
const port = process.env.PORT || 3000;

// חייבים לקרוא ל-express.json לפני הגדרת הנתיבים כדי שהבקשות עם body יתקבלו כ JSON.
app.use(express.json());

// ייבוא ה-routes מקבצי ה-routes
app.use('/courses', coursesRoutes);
app.use('/students', studentsRoutes);
app.use('/registrations', registrationsRoutes);

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


const express = require('express');
const { default: chalk } = require('chalk');
const coursesRouter = require('./courses');
const studentsRouter = require('./students');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/courses', coursesRouter);
app.use('/students', studentsRouter);
app.use('/סטודנטים', studentsRouter);

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Express server is running',
        description: 'This server supports /courses and /students routes for course and student data.'
    });
});

app.listen(port, () => {
    console.log(chalk.bgYellow.black(`Server is running at http://localhost:${port}`));
});


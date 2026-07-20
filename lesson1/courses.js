const { Router } = require('express');
const { default: chalk } = require('chalk');

const router = Router();

const courses = [
    {
        id: 1,
        name: 'Sewing and Imagery',
        description: 'Knowing the machine, developing patterns, and high-level repairs'
    },
    {
        id: 2,
        name: 'Creative writing',
        description: 'Developing imagination, correct plot structure, and writing articles and stories'
    },
    {
        id: 3,
        name: 'Digital Marketing',
        description: 'Business promotion strategies, marketing writing (copywriting) and effective digital presence management'
    },
    {
        id: 4,
        name: 'Financial Management',
        description: 'Understanding cash flow, budget planning, risk management and long-term investments'
    }
];

router.get('/', (req, res) => {
    res.json(courses);

    courses.forEach(course => {
        console.log(
            chalk.green.bold(course.name) +
            chalk.blue(' _' + course.description)
        );
    });
});

module.exports = {
    router,
    courses
};

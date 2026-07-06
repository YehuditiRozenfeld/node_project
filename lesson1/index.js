console.log("hi!!!")
const { default: chalk } = require('chalk');
const http =require('http');
const { json } = require('stream/consumers');

const courses =[
    {
        id:1, name:"Sewing and Imagery", description:"Knowing the machine,developing patterns, and high-level repairs"
    },
     {
        id:2, name:"Creative writing", description:"Developing imagination, correct plot structure, and writing articles and stories "
     },
     {
        id:3, name:"Digital Marketing", description:"Business promotion strategies, marketing writing (copywriting) and effective digital presence management"
     },
     {
        id:4, name:"Financial Management", description:"Understanding cash flow, budget planning, risk management and long-term investments"
     }
]

const server = http.createServer((req, res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(courses));

    courses.forEach(courses =>{
    console.log(
        chalk.green.bold(courses.name)+
        chalk.blue("_"+ courses.description)
    );
});

});


server.listen(3000, ()=>{
    console.log(chalk.bgYellow.black('the server is running at http://locallhost:3000'));

}

)


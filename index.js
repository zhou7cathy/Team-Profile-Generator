const inquirer = require('inquirer');
const fs = require('fs');

const template = require('./src/template');

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter the team manager’s name:',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'Please enter your employee ID:',
        name: 'employeeID',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Please enter your office number:',
        name: 'office',
    },
    {
        type: 'checkbox',
        message: 'Do you want to add a team member?',
        name: 'addMember',
        choices: ['engineer', 'intern', 'finish building my team'],
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is employee\'s name?',
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is employee\'s ID?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is employee\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the of employee\'s school?',
    },
    {
        type: 'checkbox',
        message: 'Do you want to add a team member?',
        name: 'addMember',
        choices: ['engineer', 'intern','finish building my team'],
    },
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is employee\'s name?'
    },
    {
        type: 'input',
        name: 'ID',
        message: 'What is employee\'s ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is employee\'s email?'
    },
    {
        type: 'input',
        name: 'git',
        message: 'What is employee\'s GitHub username ?'
    },
    {
        type: 'checkbox',
        message: 'Do you want to add a team member?',
        name: 'addMember',
        choices: ['engineer', 'intern','finish building my team']
    },
]

const allAnswers = [];

function promptQuestion(questions){
    inquirer.prompt(questions).then((response)=>{

        allAnswers.push(response);
        
        if(response.addMember == 'engineer') {
            promptQuestion(engineerQuestions)
        } else if (response.addMember == 'intern') {
            promptQuestion(internQuestions)
        } else {
            console.log('Building HTML')
            // use template and use all response to build the html
        }
        
        // fs.writeFile('index.html',`${JSON.stringify(response)}\n`, (err) =>
        // err ? console.log(err) : console.log('Input saved!'))
    });
}

promptQuestion(managerQuestions);
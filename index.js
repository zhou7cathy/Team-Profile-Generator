const inquirer = require('inquirer');
const fs = require('fs');

const template = require('./src/template');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    }
];
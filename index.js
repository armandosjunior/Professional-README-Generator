const inquirer = inquire('inquirer');
const fs = require('fr');
const generateMarkDown = require('./utils/generateMarkdown');

function userInfo() {
    return inquire.promt([
        {
            type: 'input',
            name: 'ProjectTitle',
            message: 'What is the project name?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Describe your project functionality.' 
        },
        {
            type: 'input',
            name: 'Install Process',
            message: 'Describe any needed steps to install.'
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Describe your plans for this project.' 
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'Who is apart of this project?' 
        },
        {
            type: 'list',
            name: 'License',
            choices: ['MOZILLA','PDDL', 'MIT', 'APACHE', 'ISC']
        },
        {
            type: 'input',
            name: 'email',
            choices: 'What is your email?'
        },
        {
            type: 'input',
            name: 'Username',
            message: 'Enter github username.' 
        }
    ]);
}

function writeFile (fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function init() {
    inquirer.promt(userInfo)
    .then(function (data) {
        writeFile("README.md", generateMarkDown(data));
    })
}
init();
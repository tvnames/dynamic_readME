const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require ('./generateMarkdown');

// TODO: Include packages needed for this application
function input() {
    return inquirer.prompt()[
        {
            type: "input",
            name: "todo",
            message:v
        }
    ]
};
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'ProjectName',
        message:'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Tell me what your project is about:'
    },
    {
        type: 'input',
        name: 'Instructions',
        message: 'Tell me how to use your project:'
    },
    {
        type: 'list',
        name: 'License',
        message: 'What is your licensing information?',
        choices: ['Apache2','BSD-3-Clause','GNU General Public License (GPL)',
            'GNU Lesser General Public License (LGPL)'
            ,'MIT license'
            ,'Mozilla Public License2.0']
    },
    {
        type: 'input',
        name: 'Contributing',
        message:'Who contributed to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do we test it?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If you have any questions you can reach me at'
    },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

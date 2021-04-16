const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");
const renderLicenseSection = require('./generateMarkdown');


const inquirer = require("inquirer");


const writeFileAsync = util.promisify(fs.writeFile);

const userQuestions = async () => {
  let data = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "projDescription",
      message: "Tell me what your project is about:",
    },
    {
        type: "input",
        name: "useInstructions",
        message: "Tell me how to install your project:",
      },

    {
      type: "input",
      name: "howTo",
      message: "Tell me how to use your project:",
    },
    {
      type: "list",
      name: "license",
      message: "What is your licensing information?",
      choices: [
        "Apache2",
        "BSD-3-Clause",
        "MIT license",
        "Mozilla Public License2.0",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How do we test it?",
    },
    {
      type: "input",
      name: "questions",
      message: "What is your github?",
    },
  ]).then(data => {
      return data;
  });
  return data;
};

const generateReadme = (answers) => {
let markdownString = `![License](https://img.shields.io/badge/license-${answers.licenses}-blue);

# ${answers.projectName}  

## Table of Contents
- [Description](#Description)
- [Installation](#Install-Instructions)
- [Usage](#Usage)
- [Contribution](#Contribution-Guidelines)
- [Testing](#Test-Instructions)
- [License](#License)
- [Questions](#Questions?-Contact-Me!)

## Description

${answers.projDescription}  
  
## Install Instructions  
${answers.useInstructions}  

## Usage  
${answers.howTo}  

## Licenses
${renderLicenseSection(answers.license)}

## Contribution Guidelines  
${answers.contributing}  
  
## Test Instructions  
${answers.tests}  


## Questions? 
${answers.questions}

Get in touch!
Find me on [Github!](https://github.com/${answers.github})`

return markdownString;
}

// TODO: Create a function to write README file
const init = async () => {
  try {
    const answers = await userQuestions() 
    console.log(answers);
     fs.writeFile (`README.md`,
      generateReadme(answers),
      (err) => {
          console.log('it worked');
      }
    );
      console.log("README Created!");
  } catch (error) {
    console.log(error);
  }
};

// Function call to initialize app
init();


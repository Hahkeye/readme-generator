// TODO: Include packages needed for this application
var inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = ["Title? ","Table of Contents? ","Installation? ","Usage? ","License? ","Contributing? ","Tests? ","Questions? "];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the repo? '
        },
        {
            type: 'editor',
            name: 'description',
            message: 'Descirption of the repo? '
        },
        {
            type: 'input',
            name: 'table',
            message: 'What is the table of contents?(seperated by spaces)'
        },
        {
            type: 'editor',
            name: 'installtion',
            message: 'How do you install it? '
        },
        {
            type: 'editor',
            name: 'usage',
            message: 'How is one supposed to use this? '
        },
        {
            type: 'checkbox',
            name: 'liscence',
            message: 'What license will you be using? ',
            choices: [
                "MIT",
                "GPLv2",
                "Apache",
                "GPLv3",
                "BSD 3",
            ]
    
        },
        {
            type: 'input',
            name: 'contrib',
            message: 'How can they contribute?'
        },
        {
            type: 'input',
            name: 'tests',
            message: "Anay tests?"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }
    ]).then((answers) =>{
        console.log(answers);
    }).catch((error)=>{
        console.log("error ",error);
    });
}

// Function call to initialize app
init();

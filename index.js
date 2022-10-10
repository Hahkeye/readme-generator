// TODO: Include packages needed for this application
var inquirer = require("inquirer");
var fs = require("fs");
const renderLicense = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// const questions = ["Title? ","Table of Contents? ","Installation? ","Usage? ","License? ","Contributing? ","Tests? ","Questions? "];

// TODO: Create a function to write README file
//function writeToFile(fileName, data)



function writeToFile(data) {
    let installation="", usage="", contribute="", tests="", table="";
    // let temp = ``;
    let temp = renderLicense(data.License);
    // console.log(temp);
    let header =
`
# ${data.title} ${temp[0]}
## Description
${data.Description}
`;
    for(const[key,val] of Object.entries(data)){
        if(val){
            if(key != "title" && key != "github" && key != "email"){
                table+=`- [${key}](#${key.toLowerCase()})\n`;
            }
        }
    }
    installation = 
`
## Table of Contents
${table}
## Installtion
${data.Installation}
`;
    if(data.Usage){
        usage = 
        `
## Usage
${data.Usage}
        `;
    }else{
        usage="";
    }

    if(data.Contribute){
        contribute =
        `
## Contribute
${data.Contribute}
        `;
    }else{
        contribute="";
    }

    if(data.Tests){
        tests=
        `
## Tests
${data.Tests}
        `;
    }else{
        tests="";
    }
    let body = 
`${installation}
${usage}
${contribute}
${tests}`;

    let footer = 
`
## Liscense
${temp[1]}
## Questions
You can find me on Github under the username: [${data.github}](https://github.com/${data.github})

Or you can contact me via email @ ${data.email}

This README was generated with a readme generator.`;

    let out = 
`${header}
${body}
${footer}`;

    fs.writeFile("README.MD",out,(opt)=>{
        // console.log("Pog");
    });

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
            type: 'input',
            name: 'Description',
            message: 'Descirption of the repo? '
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install it? '
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How should the user use this? '
        },
        {
            type: 'checkbox',
            name: 'License',
            message: 'What license will you be using? ',
            choices: [
                "MIT",
                "GPLv2",
                "Apache",
                "GPLv3",
                "BSD 3",
                "Creative Commons",

            ]
    
        },
        {
            type: 'input',
            name: 'Contribute',
            message: 'How can they contribute?'
        },
        {
            type: 'input',
            name: 'Tests',
            message: "Any tests?"
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
        // console.log(answers);
        writeToFile(answers)
    }).catch((error)=>{
        console.log("error ",error);
    });
}

// Function call to initialize app
init();

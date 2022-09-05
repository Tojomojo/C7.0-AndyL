// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const {error} = require('console');
const { default: Choices } = require('inquirer/lib/objects/choices');
// const writeFile = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input

const userInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
          },
          {
            type: 'input',
            name: 'Description',
            message: 'What is the description of your project?',
          },
          {
            type: 'input',
            name: 'Installation',
            message: 'What are the instructions for user installation?',
          },
          {
            type: 'input',
            name: 'Usage',
            message: 'How to use this project?',
          },
          {
            type: 'input',
            name: 'Contributors',
            message: 'What can users do to contribute to this project?',
          },
          {
            type: 'list',
            name: 'license',
            message: 'What license should your project have?',
            choices:['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
          {
            type: 'input',
            name: 'Tests',
            message: 'Give info how users should test their projects.',
          },
          {
            type: 'input',
            name: 'Questions',
            message: 'Please enter your github username, email address, and additional ways to contact you.',
          },


])} 

userInfo().then(answers => {
  console.log(answers)
  fs.writeFileSync("README.md", generateMarkdown(answers))

})


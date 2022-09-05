// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)"
  } 
  if (license === "APACHE 2.0") {
    return "![GitHub license](https://img.shields.io/badge/license-APACHE2.0-blue.svg)"
  } 
  if (license === "GPL 3.0") {
    return "![GitHub license](https://img.shields.io/badge/license-GPL3.0-blue.svg)"
  } 
  if (license === "BSD 3") {
    return "![GitHub license](https://img.shields.io/badge/license-BSD3-blue.svg)"
  } 
  if (license === "None") {
    return ""
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return "* [License](#License)"
  } 
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return ` ## License
    ${license}`
  } 
  return null
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  // return `# ${data.title}
  return  `
  ## Title
  ${answers.Title}
  ${renderLicenseBadge(answers.license)}
  ## Description 
  ${answers.Description}
  
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  ${renderLicenseLink(answers.license)}
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation
  ${answers.Installation}
  ## Usage
  ${answers.Usage}
  ## License
  ${answers.License}
  ## Contributing
  ${answers.Contributing}
  ## Tests
  ${answers.Tests}
  ## Questions
  ${answers.Questions}
  ${answers.LinkedIn}
  ${answers.Email}
`;
}

module.exports = generateMarkdown;

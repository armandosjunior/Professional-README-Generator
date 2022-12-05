function generateMarkDown (data) {

return `

# ${data.ProjectTitle}



##Description
${data.Description}



##Table Of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contribution](#contribution)



##Installation
${data.Installation}



##Usage
${data.Usage}



##License
${data.License}



##Contribution
${data.Contribution}

`;
}

module.exports = generateMarkDown;
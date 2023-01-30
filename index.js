const inquirer = require('inquirer');
const fs = require('fs');

const template = require('./src/template');

const managerQuestions = [
    {
        type: 'input',
        message: 'Please enter the team manager’s name:',
        name: 'managerName',
        validate: function (managerName) {
    
            if (managerName != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    
    {
        type: 'input',
        message: 'Please enter your employee ID:',
        name: 'employeeID',
        validate: function (employeeID) {
    
            if (employeeID != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
        validate: function (email) {
    
            if (email != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'Please enter your office number:',
        name: 'office',
        validate: function (office) {
    
            if (office != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
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
        message: 'What is employee\'s name?',
        name: 'internName',
        validate: function (internName) {
    
            if (internName != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is employee\'s ID?',
        name: 'employeeID',
        validate: function (ID) {
    
            if (ID != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is employee\'s email?',
        name: 'email',
        validate: function (email) {
    
            if (email != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is the of employee\'s school?',
        name: 'school',
        validate: function (school) {
    
            if (school != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
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
        message: 'What is employee\'s name?',
        name: 'engineerName',
        validate: function (engineerName) {
    
            if (engineerName != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is employee\'s ID?',
        name: 'employeeID',
        validate: function (ID) {
    
            if (ID != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is employee\'s email?',
        name: 'email',
        validate: function (email) {
    
            if (email != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
    },
    {
        type: 'input',
        message: 'What is employee\'s GitHub username ?',
        name: 'git',
        validate: function (git) {
    
            if (git != "") {
                  return true;
              } else {
                  console.log("  Please enter a valid input")
                  return false;
              }
        }
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
            buildHTML();
        }
    });
}

function buildHTML(){
    var finalResult = '';
    allAnswers.forEach(item => {
        if (item.managerName) {
           const managerTemp = template.managerTemplate();
           let tempResult = managerTemp.replace("nameReplaceable", item.managerName);
           tempResult = tempResult.replace("idReplaceable", item.employeeID);
           tempResult = tempResult.replace("emailReplaceable", item.email);
           tempResult = tempResult.replace("emailReplaceable", item.email);
           tempResult = tempResult.replace("officeNumberReplaceable", item.office);
           finalResult += tempResult;
        } else if (item.internName) {
            console.log(item.internName)
            const internTemp = template.internTemplate();
            let tempResult = internTemp.replace("nameReplaceable", item.internName);
            tempResult = tempResult.replace("idReplaceable", item.employeeID);
            tempResult = tempResult.replace("emailReplaceable", item.email);
            tempResult = tempResult.replace("emailReplaceable", item.email);
            tempResult = tempResult.replace("schoolReplaceable", item.school);
            finalResult += tempResult;
        } else if (item.engineerName) {
            console.log(item.engineerName)
            const engineerTemp = template.engineerTemplate();
            let tempResult = engineerTemp.replace("nameReplaceable", item.engineerName);
            tempResult = tempResult.replace("idReplaceable", item.employeeID);
            tempResult = tempResult.replace("emailLinkReplaceable", item.email);
            tempResult = tempResult.replace("emailReplaceable", item.email);
            tempResult = tempResult.replace("gitHubLinkReplaceable", item.git);
            tempResult = tempResult.replace("gitHubReplaceable", item.git);
            finalResult += tempResult;
        }
    });
    let bodyTemp = template.bodyTemplate();
    bodyTemp = bodyTemp.replace('itemsReplaceable', finalResult);

    fs.writeFile('./dist/index.html', bodyTemp, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

promptQuestion(managerQuestions);

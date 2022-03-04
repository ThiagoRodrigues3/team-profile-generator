// * Required NPM Packages
const inquirer = require('inquirer')
const fs = require('fs')

// * Importing classes
const Manager = require('./library/manager')
const Engineer = require('./library/engineer')
const Intern = require('./library/intern')
let team = []

function nameTeam() {
    return inquirer.prompt([{
        type: 'input',
        message: 'What is this Teams Name?',
        name: 'teamName'
    }])
    .then(function(data) {
        const teamName = data.teamName
        team.push(teamName)
        addManager()
    })
}

function addManager() {
    inquirer.prompt([{
            type: 'input',
            name: 'firstName',
            message: 'What is this Managers First Name?'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'What is this Managers Last Name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Managers Employee ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Managers email?'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is this Managers office phone number?'
        },
    ])
    .then(function(data) {
        const firstName = data.firstName
        const lastName = data.lastName
        const id = data.id
        const email = data.email
        const officeNum = data.officeNum
        const teamMember = new Manager(firstName, lastName, id, email, officeNum)
        team.push(teamMember)
        addTeamMember()
    })
}

function addTeamMember() {
    inquirer.prompt([{
            type: 'list',
            message: 'Are there any more members to add to the Team?',
            choices : ['Add an Engineer', 'Add an Intern', 'My Team is Complete'],
            name : 'addTeamData'
        }
    ])
    .then(function(data){
        switch(data.addTeamData) {
            case 'Add an Engineer':
                addEngineer()
                break
            case 'Add an Intern':
                addIntern()
                break
            case 'My Team is Complete':
                buildMyTeam()
                break

        }
    })  
}

function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is this Engineer's First Name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is this Engineer's Last Name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this Engineer's employee ID Number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this Engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is this Engineer's Github Username?",
        },
    ])
    .then(function(data) {
        let firstName = data.firstName;
        let lastName = data.lastName;
        let id = data.id;
        let email = data.email;
        let github = data.github;
        let teamMember = new Engineer(firstName, lastName, id, email, github);
        team.push(teamMember);
        addTeamMember();
    });
}

function addIntern() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is this Intern's First Name?",
        },
        {
            type: "input",
            name: "lastName",
            message: "What is this Intern's Last Name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is this Intern's employee ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is this Intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does this Intern attend?",
        },
    ])
    .then(function(data) {
        let firstName = data.firstName;
        let lastName = data.lastName;
        let id = data.id;
        let email = data.email;
        let school = data.school;
        let teamMember = new Intern(firstName, lastName, id, email, school);
        team.push(teamMember);
        addTeamMember();
    });
}

function buildMyTeam() {
    console.log("Team ready! Check the 'dist' folder for your page.");
    let pageArray = [];
    let pageHead = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>${team[0]} | Team Page</title>
                    <meta name="description" content="Learn more about team: ${team[0]}">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous" />
                    <link rel="stylesheet" href="./css/style.css"/>
                    </head>
                    <body>
                        <div class="header"><h1>${team[0]}</h1></div>
                        <div class="container">`;
    pageArray.push(pageHead);
    for (let i = 1; i < team.length; i++) {
        let object = `
                            <div class="card">
                                <div class="card-header">
                                    <h3>${team[i].firstName} ${team[i].lastName}</h3>
                                    <h4>${team[i].title}</h4>
                                </div>

                                <div class="card-content">
                                    <p><strong>EMAIL:</strong> <a href="mailto:${team[i].email}">${team[i].email}</a></p>
                                    <p><strong>ID:</strong> ${team[i].id}</p>`;
        // Add number if Manager
        if (team[i].officeNum) {
            object += `<p><strong>OFFICE: </strong> ${team[i].officeNum}</p>`;
        }
        // Add Github if Engineer
        if (team[i].github) {
            object += `<p><strong>GITHUB: </strong> <a href="https://github.com/${team[i].github}" target="_blank">${team[i].github}</a></p>`;
        }
        // Add School if Intern
        if (team[i].school) {
            object += `<p><strong>SCHOOL: </strong> ${team[i].school}</p>`;
        }
        // End
        object += `</div></div>`;
        pageArray.push(object);
    }
    // Compose
    let endPage = `</div></body></html>`;
    pageArray.push(endPage);
    fs.writeFile(`./dist/${team[0]}.html`, pageArray.join(""), function(err) {});
}
nameTeam();

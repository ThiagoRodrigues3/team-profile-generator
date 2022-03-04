const Employee = require('./employee')

class Engineer extends Employee {
    constructor(firstName, lastName, id, email, github) {
        super(firstName, lastName, id, email)
        this.github = github
        this.title = 'Engineer'
    }
    getRole() {
        return this.title;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer
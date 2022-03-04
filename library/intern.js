const Employee = require('./employee')

class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
        super(firstName, lastName, id, email)
        this.school = school;
        this.title = "Intern"

    }
    getSchool() {
        return this.school;

    }
    getRole() {
        return this.title;
    }
}
module.exports = Intern

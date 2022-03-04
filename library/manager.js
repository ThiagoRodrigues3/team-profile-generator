const Employee = require('./employee')

class Manager extends Employee {

    constructor(firstName, lastName, id, email, officeNum) {
        super(firstName, lastName, id, email)
        this.officeNum = officeNum
        this.title = "Manager"

    }
    getOfficeNum() {
        return this.officeNum;

    }
    getRole() {
        return this.title;
    }
}
module.exports = Manager
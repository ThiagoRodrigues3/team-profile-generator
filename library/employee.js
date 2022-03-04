// Employee Class 
class Employee {
    constructor(firstName, lastName, id, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.id = id
        this.title = "Employee"
        this.email = email
    }
    getFirstName() {
        return this.firstName
    }
    getLastName() {
        return this.lastName
    }
    getId() {
        return this.id
    }
    getRole() {
        return this.title     
    }
    getEmail() {
        return this.email
    }
}

module.exports = Employee
const Employee = require("./Employee")
class Engineer extends Employee{
    constructor(name, id, email, gitHub){
        this.officeNumber = officeNumber
    }

    getOffice(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}
module.exports = Manager;
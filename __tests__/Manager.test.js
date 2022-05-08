const Manager = require("../lib/Manager");

const Employee = require("../lib/Employee");

describe("Manager", () => {
  describe("Initialization", () => {
 
    it("should set office number via constructor arguments", () => {
      //arrance
      const officeNumber = 100;
      //act
      const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
      //assert
      expect(manager.officeNumber).toBe(officeNumber);
    });
  })
  
})

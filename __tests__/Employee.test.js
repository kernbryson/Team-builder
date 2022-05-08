const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should instantiate an employee instance", () => {
      //Arrange
      const employee = new Employee();
      //Act

      //Assert
      expect(typeof employee).toBe("object");
    });

    it("should set name via constructor arguments", () => {
      //arrance
      const name = "Allice";
      //act
      const employee = new Employee(name);
      //assert
      expect(employee.name).toBe(name);
    });
    it("should set id via constructor arguments", () => {
        //arrance
        const id = 100;
        //act
        const employee = new Employee("Alice", id);
        //assert
        expect(employee.id).toBe(id);
      });

      it("should set email via constructor arguments", () => {
        //arrance
        const email = "test@test.com";
        //act
        const employee = new Employee("Alice", 100, email );
        //assert
        expect(employee.email).toBe(email);
      });
  });

});

describe("Getter methods", () => {
    describe("Initialization", () => {
      it("it should get name via getID()", () => {
        //Arrange
        const name = "Allice";
        const employee = new Employee (name, 100, "test@test.com");
        const employeeName = employee.getName();
        expect(employeeName).toBe(name)
   
     
      });
    })
})
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


test("get office Number", () => {
    const testValue = 100;
    const employee = new Manager("Foo", 1, "email@email.com", testValue);
    expect(employee.officeNumber).toBe(testValue);
  });
  
  test("make getRole() function return 'Manager'", () => {
    const testValue = "Manager";
    const employee = new Manager("Foo", 1, "email@email.com", 100);
    expect(employee.getRole()).toBe(testValue);
  });
  
  test("Can get office number via getOffice()", () => {
    const testValue = 100;
    const employee = new Manager("Foo", 1, "email@email.com", testValue);
    expect(employee.getOfficeNumber()).toBe(testValue);
  });
const Employee = require("../lib/Employee");

test("create a new Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

  test("get employee name", () => {
    const name = "Liz";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  
  test("get employee id", () => {
    const testValue = 100;
    const employee = new Employee("Foo", testValue);
    expect(employee.id).toBe(testValue);
  });
  
  test("get employee email", () => {
    const testValue = "email@email.com";
    const employee = new Employee("Foo", 1, testValue);
    expect(employee.email).toBe(testValue);
  });
  
  test("get name when I call getName()", () => {
    const testValue = "Liz";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
const Employee = require("../lib/Employee");

test("Create a new Employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });
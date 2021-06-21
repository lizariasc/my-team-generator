const Intern = require("../lib/Intern");

test("get school using the constructor", () => {
  const testValue = "UCLA";
  const employee = new Intern("Foo", 1, "email@email.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("make getRole() function return 'Intern'", () => {
  const testValue = "Intern";
  const employee = new Intern("Foo", 1, "email@email.com", "UCLA");
  expect(employee.getRole()).toBe(testValue);
});

test("make getSchool() work", () => {
  const testValue = "UCLA";
  const employee = new Intern("Foo", 1, "email@email.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});
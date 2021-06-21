const Engineer = require("../lib/Engineer");

test("get GitHub account", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Foo", 1, "email@email.com", testValue);
  expect(employee.github).toBe(testValue);
});

test("make getRole() function return 'Engineer'", () => {
  const testValue = "Engineer";
  const employee = new Engineer("Foo", 1, "email@email.com", "GitHubUser");
  expect(employee.getRole()).toBe(testValue);
});

test("make getGithub() work", () => {
  const testValue = "GitHubUser";
  const employee = new Engineer("Foo", 1, "email@email.com", testValue);
  expect(employee.getGithub()).toBe(testValue);
});
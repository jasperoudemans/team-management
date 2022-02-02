const inquirer = require("inquirer");
const Role = require("../models/role");

const addRoleQuestions = [
  {
    type: "input",
    message: "Enter role name",
    name: "roleName",
  },
  {
    type: "input",
    message: "Enter salary of new role",
    name: "salary",
  },
  {
    type: "input",
    message: "Enter the department name for this role",
    name: "department",
  },
];

const addRole = async () => {
  const answer = await inquirer.prompt(addRoleQuestions);
  await Role.create(answer.roleName, answer.salary, answer.department);
};

module.exports = addRole;

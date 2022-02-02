const inquirer = require("inquirer");
const Employee = require("../models/employee");

const addEmployeeQuestions = [
  {
    type: "input",
    message: "Enter employee's first name",
    name: "firstName",
  },
  {
    type: "input",
    message: "Enter employee's last name",
    name: "lastName",
  },
  {
    type: "input",
    message: "Enter employee's role",
    name: "role",
  },
  {
    type: "input",
    message: "Enter employee's manager",
    name: "manager",
  },
];

const addEmployee = async () => {
  const answer = await inquirer.prompt(addEmployeeQuestions);
  const [manager_fname, manager_lname] = answer.manager.split(" ");
  await Employee.create(
    answer.firstName,
    answer.lastName,
    answer.role,
    manager_fname,
    manager_lname
  );
};

module.exports = addEmployee;

const inquirer = require("inquirer");
const Department = require("../models/department");

const addDptQuestion = [
  {
    type: "input",
    message: "Enter the name of the department you wish to create",
    name: "deptName",
  },
];

const addDepartment = async () => {
  const answer = await inquirer.prompt(addDptQuestion);
  await Department.create(answer.deptName);
};

module.exports = addDepartment;

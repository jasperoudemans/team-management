const connection = require("./config/db_connection");
const Department = require("./models/department");
const Role = require("./models/role");
const Employee = require("./models/employee");
const inquirer = require("inquirer");
const viewAllDepartments = require("./controllers/viewAllDepartments");

const menuQuestions = [
  {
    type: "list",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Quit",
    ],
    message: "What would you like to do?",
    name: "menu",
  },
];

const main = async () => {
  connection.connect();
  let shouldContinue = true;
  while (shouldContinue) {
    const menuAnswer = await inquirer.prompt(menuQuestions);
    switch (menuAnswer.menu) {
      case "View all departments": {
        await viewAllDepartments();
        break;
      }
      case "View all roles": {
        break;
      }
      case "View all employees": {
        break;
      }
      case "Add a department": {
        break;
      }
      case "Add a role": {
        break;
      }
      case "Add an employee": {
        break;
      }
      case "Update an employee role": {
        break;
      }
      case "Quit": {
        shouldContinue = false;
        break;
      }
    }
  }
  //   await Employee.create("Johnny", "Miller", "clerk", "Jeff", "Hazlett");
  //   const departments = await Department.getAll();
  //   console.log(departments);
  //   await Employee.updateRole(6, 1);
  //   const employees = await Employee.getAll();
  //   console.log(employees);

  //   const employees = await Employee.getAll();
  //   console.log(employees);
  connection.end();
};

main();

const connection = require("./config/db_connection");
const Department = require("./models/department");
const Role = require("./models/role");
const Employee = require("./models/employee");
const inquirer = require("inquirer");
const viewAllDepartments = require("./controllers/viewAllDepartments");
const viewAllRoles = require("./controllers/viewAllRoles");
const viewAllEmployees = require("./controllers/viewAllEmployees");
const cTable = require("console.table");
const addDepartment = require("./controllers/addDepartment");
const addRole = require("./controllers/addRole");
const addEmployee = require("./controllers/addEmployee");
const updateEmployeeRole = require("./controllers/updateEmployeeRole");

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
        await viewAllRoles();
        break;
      }
      case "View all employees": {
        await viewAllEmployees();
        break;
      }
      case "Add a department": {
        await addDepartment();
        break;
      }
      case "Add a role": {
        await addRole();
        break;
      }
      case "Add an employee": {
        await addEmployee();
        break;
      }
      case "Update an employee role": {
        await updateEmployeeRole();
        break;
      }
      case "Quit": {
        shouldContinue = false;
        break;
      }
    }
  }
  connection.end();
};

main();

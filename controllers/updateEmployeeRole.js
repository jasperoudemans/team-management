const inquirer = require("inquirer");
const Employee = require("../models/employee");
const Role = require("../models/role");

const updateEmployeeRole = async () => {
  const employees = await Employee.getAll();
  const roles = await Role.getAll();
  const employeeQuestions = [
    {
      type: "list",
      choices: employees.map((employee) => {
        return {
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        };
      }),
      name: "employeeId",
    },
    {
      type: "list",
      choices: roles.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      }),
      name: "role_id",
    },
  ];
  const answers = await inquirer.prompt(employeeQuestions);
  await Employee.updateRole(answers.employeeId, answers.role_id);
};

module.exports = updateEmployeeRole;

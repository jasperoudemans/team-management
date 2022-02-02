const Employee = require("../models/employee");

const viewAllEmployees = async () => {
  console.table(await Employee.getAll());
};

module.exports = viewAllEmployees;

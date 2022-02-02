const Department = require("../models/department");

const viewAllDepartments = async () => {
  console.table(await Department.getAll());
};

module.exports = viewAllDepartments;

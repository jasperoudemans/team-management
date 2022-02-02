const Department = require("../models/department");

const viewAllDepartments = async () => {
  console.log(await Department.getAll());
};

module.exports = viewAllDepartments;

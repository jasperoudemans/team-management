const Role = require("../models/role.js");

const viewAllRoles = async () => {
  console.table(await Role.getAll());
};

module.exports = viewAllRoles;

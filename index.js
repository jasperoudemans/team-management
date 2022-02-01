const connection = require("./config/db_connection");
const Department = require("./models/department");
const Role = require("./models/role");

const main = async () => {
  connection.connect();
  const departments = await Department.getAllDepartments();
  console.log(departments);
  const roles = await Role.getAllRoles();
  console.log(roles);
  connection.end();
};

main();

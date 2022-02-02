const connection = require("./config/db_connection");
const Department = require("./models/department");
const Role = require("./models/role");
const Employee = require("./models/employee");

const main = async () => {
  connection.connect();
  await Role.create("flipper", 5, "hardware");
  //   const departments = await Department.getAll();
  //   console.log(departments);
  const roles = await Role.getAll();
  console.log(roles);
  //   const employees = await Employee.getAll();
  //   console.log(employees);
  connection.end();
};

main();

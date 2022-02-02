const connection = require("./config/db_connection");
const Department = require("./models/department");
const Role = require("./models/role");
const Employee = require("./models/employee");

const main = async () => {
  connection.connect();
  await Employee.create("Johnny", "Miller", "clerk", "Jeff");
  //   const departments = await Department.getAll();
  //   console.log(departments);
  const employees = await Employee.getAll();
  console.log(employees);
  //   const employees = await Employee.getAll();
  //   console.log(employees);
  connection.end();
};

main();

const connection = require("./config/db_connection");
const Department = require("./models/department");

const main = async () => {
  connection.connect();
  const departments = await Department.getAllDepartments();
  console.log(departments);
  connection.end();
};

main();

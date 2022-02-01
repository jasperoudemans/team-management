const mysql = require("mysql2");
const connection = require("../config/db_connection");

const getAllDepartments = async () => {
  const [departments] = await connection
    .promise()
    .query("SELECT * FROM department");
  return departments;
};

module.exports = { getAllDepartments };

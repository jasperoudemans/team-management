const dotenv = require("dotenv");
const mysql = require("mysql2");
dotenv.config();
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "employee_management_db",
  password: process.env.DB_PW,
});

module.exports = connection;

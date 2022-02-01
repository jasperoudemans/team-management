const connection = require("../config/db_connection");

const getAll = async () => {
  const [departments] = await connection
    .promise()
    .query("SELECT * FROM department");
  return departments;
};

const create = async (dptname) => {
  await connection
    .promise()
    .query("INSERT INTO department (name) VALUES (?)", [dptname]);
};

module.exports = { getAll, create };

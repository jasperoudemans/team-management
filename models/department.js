const connection = require("../config/db_connection");

const getAll = async () => {
  const [departments] = await connection
    .promise()
    .query("SELECT * FROM department");
  return departments;
};

module.exports = { getAll };

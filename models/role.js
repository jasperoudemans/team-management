const connection = require("../config/db_connection");
const getRolesQuery = `
SELECT role.id, role.title, role.salary, department.name
FROM role JOIN department ON department.id=role.department_id
`;
const getAll = async () => {
  const [roles] = await connection.promise().query(getRolesQuery);
  return roles;
};

const create = async (name, salary, department_name) => {
  const [ids] = await connection
    .promise()
    .query("SELECT id FROM department WHERE name = ?", [department_name]);
  const department_id = ids[0].id;
  if (!department_id) throw new Error("Not a valid department");
  await connection
    .promise()
    .query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [
      name,
      salary,
      department_id,
    ]);
};

module.exports = { getAll, create };

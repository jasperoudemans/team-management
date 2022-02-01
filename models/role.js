const connection = require("../config/db_connection");
const getRolesQuery = `
SELECT role.id, role.title, role.salary, department.name
FROM role JOIN department ON department.id=role.department_id
`;
const getAll = async () => {
  const [roles] = await connection.promise().query(getRolesQuery);
  return roles;
};

module.exports = { getAll };

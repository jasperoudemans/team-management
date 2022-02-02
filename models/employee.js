const connection = require("../config/db_connection");
const getQuery = `
SELECT employee.id, 
    employee.first_name, 
    employee.last_name, 
    role.title, 
    role.salary, 
    department.name AS department_name, 
    manager.first_name AS manager_fname, 
    manager.last_name AS manager_lname
FROM employee 
JOIN role ON employee.role_id = role.id 
JOIN department ON department.id = role.department_id 
JOIN employee AS manager ON manager.id = employee.manager_id
`;

const getAll = async () => {
  const [employees] = await connection.promise().query(getQuery);
  return employees;
};

const create = async (f_name, l_name, role, manager_fname, manager_lname) => {
  const [manager_id] = await connection
    .promise()
    .query("SELECT id FROM employee WHERE first_name = ? AND last_name = ?", [
      manager_fname,
      manager_lname,
    ]);
  console.log(manager_id);
  const [role_id] = await connection
    .promise()
    .query("SELECT id FROM  role WHERE title = ?", [role]);
  await connection
    .promise()
    .query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [f_name, l_name, role_id[0].id, manager_id[0].id]
    );
};

module.exports = { getAll, create };

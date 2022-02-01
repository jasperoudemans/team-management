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

module.exports = { getAll };

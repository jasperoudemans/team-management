USE employee_management_db;

INSERT INTO department (name)
VALUES ('clothing'), ('jewelery'), ('electronics');

INSERT INTO role (title, salary, department_id)
VALUES ('manager', 50000, 1), 
('clerk', 40000, 1), 
('assistant', 40000, 2), 
('cashier', 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jeff', 'Hazlett', 1, NULL),
('Wendy', 'Walker', 2, 1),
('Frank', 'Sinatra', 3, 1),
('Sally', 'Seashell', 4, NULL);



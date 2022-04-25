CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(30),
    wage DECIMAL (8,2),
    department_id INT NOT NULL,
    FOREIGN KEY (department_name) REFERENCES department_id
);

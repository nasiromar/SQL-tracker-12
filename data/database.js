const db = require('../config/connection');


class Database {
    constructor(connection) {
        this.connection = connection;
    }


    viewAllDepartments() {
        return this.connection.query("SELECT * FROM department");
    }

    viewAllRoles() {
        return this.connection.query(
            "SELECT * FROM roles JOIN department ON department.id = roles.department_id")
    }

    viewAllEmployees() {
        return this.connection.query(
            "SELECT * FROM employees JOIN roles ON roles.id = employees.role_id JOIN department ON roles.department_id = department.id JOIN employees e ON e.id = employees.role_id");
}

    addDepartment(departmentName) {
        return this.connection.query(
            "INSERT INTO departments SET name = ?",
            departmentName
        );
    }

    addRole(title, salary, department_id) {
        return this.connection.query(
            "INSERT INTO roles SET title = ?, salary = ?, department_id = ?",
            [title, salary, department_id]
        );
    }


    addEmployee(firstName, lastName, role_id, lead_id) {
        return this.connection.query("INSERT INTO employees SET first_name = ?, last_name = ?, role_id =?, lead_id =?", 
        [firstName, lastName, role_id, lead_id]
        );
    }
}
const database  = new Database(db);
module.exports = database;
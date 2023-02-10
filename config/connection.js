const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection(
    {
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
    },
    console.log("connected to the emplyee_db database")
);

connection.query = util.promisify(connection.query);

module.exports = connection;



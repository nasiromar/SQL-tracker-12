const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnect(
    {
    host: "localhost",
    user: "root",
    password: "password",
    database: "emplyee_db",
    },
    console.log("connected to emplyee_db database")
);

connection.query = util.promisify(connection.query);

module.exports = connection;



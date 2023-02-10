const inquirer = require('inquirer');
const database = require('./data/database');

async function menu(){
    const answers = await inquirer.Prompt([
        {
            type: 'list',
            message: 'what would you like to do?',
            choices: [
                'view all Departments',
                'view all Roles',
                'view all Employees',
                'Add a Department',
                'Add a Role',
                'Add a Employee',
                'End',
            ],
            name: 'userChoice'
        }
    ]);


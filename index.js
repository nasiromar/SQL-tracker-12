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

    switch(answers.userChoice) {
        case 'view all Departments': {
            await viewDepartments();
            await menu();
            break;
        }
        case 'view all Roles': {
            await viewRoles();
            await menu();
            break;
        }
        case 'view all Employees': {
            await viewEmployees();
            await menu();
            break;
        }
        case 'add a Department': {
            await addDepartment();
            await menu();
            break;
        }
        case 'add a Role': {
            await addRole();
            await menu();  
            break;
        }
        case 'add a Employee': {
            await addEmployee();
            await menu();
            break;
        }
        default: {
            process.exit(0);
        }

     }                        
}

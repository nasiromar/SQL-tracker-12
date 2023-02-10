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
async function viewDepartments() {
    const departments = await database.viewAllDepartments();
    console.table(departments);
}

async function viewRoles() {
    const roles = await database.viewAllRoles();
    console.table(roles);
}

async function viewEmployees() {
    const employees = await database.viewAllEmployees();
    console.table(employees);
}
async function addDepartment() {
    const answer = await inquirer.Prompt([{
        type: 'input',
        message: 'what is the name of the department?',
        name: 'departmentName'
    }]);

    await   database.addDepartment(answer.departmentName);
    console.log('department include');
}

async function addRole() {
    const departments = await database.viewAllDepartments();
    const answers = await inquirer.Prompt([
        {
            type: 'input',
            message: 'what is the title of the role?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'what is the salary of the role?',
            name: 'salary',
        },
        {
            type: 'input',
            message: 'what department dose this position fit in to ?',
            name: 'Department'
        }
    ]);
    for(let i = 0; i < departments.length; i++) {
        if(answers.department === departmenst[i].name) {
            console.log(departments[i].id);
            await database.addRole(answers.title, answers.salary, departments[i].id);
        }
    }
    console.log('role included');
}

async function addEmployee() {
    const roles = await database.viewAllRoles();
    console.log('roles');
    const rolesTitle = roles.map(role => role.title);
    const leads = await database.viewAllEmployees();
    console.log('leads');
    const leadsName = leads.map((leads) => {
        return `${leads.first_name} ${leads.last_name}`;


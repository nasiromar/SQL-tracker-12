const inquirer = require('inquirer');
const database = require('./data/database');

async function menu(){
    const answers = await inquirer.prompt([
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
        case 'Add a Department': {
            console.log(' case - Add a Department');
            await addDepartment();
            await menu();
            break;
        }
        case 'Add a Role': {
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
            console.log('hit default,choice = ', answers.userChoice)
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
    console.log('add department');
    const answer = await inquirer.prompt([{
        type: 'input',
        message: 'what is the name of the department?',
        name: 'departmentName'
    }]);

    await   database.addDepartment(answer.departmentName);
    console.log('department include');
}

async function addRole() {
    const departments = await database.viewAllDepartments();
    const answers = await inquirer.prompt([
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
    console.log('before for loop');
    for(let i = 0; i < departments.length; i++) {
        console.log('department = ', departments[i].name);
        if(answers.Department === departments[i].name) {
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
    });
    leadsName.push('no lead');
    console.log(leadsName);
    let = roleId;
    let = leadId;
    const answers = await inquirer.prompt([
        {
            type:'input',
            message: 'what is the employees first name?',
            name:'first name'
        },
        {
            type:'input',
            message: 'what is the employees last name?',
            name:'last name',
        },
        {
            type:'list',
            message: 'what is the employee role?',
            choices: rolesTile,
            name: 'role',

        },
        {
            type: 'list',
            message: 'who is the employees lead?',
            choices: leadsName,
            name: 'lead',

        }
]);

for (let i = 0; i < leads.length; i++) {
    if (answers.role === roles[i].title) {
        roleId = roles[i].id; 
    }
}
for (let i = 0; i < leads.length; i++) {
    if (answers.lead === `${leads[i].first_name} ${leads[i].last_name}`) {
        leadId = leads[i].id;
    }
}
if(!leadId) {
    leadId = null;
}

await database.addEmployee(answers.first_name, answers.last_name, roleId, leadId);
console.log('employee included')
}



    menu();


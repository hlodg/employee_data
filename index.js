const package=require('dotenv').config();
const inquirer = require('inquirer');

// const queryFunctions = require('./queryFunctions')
const { allDepts, allRoles, allEmployees, addDepartment, addRole, updateEmployee, addEmployee} = require('./queryFunctions');
// const { allRoles } = require('./queryFunctions');
// Connect to database

const options = ["ALL_DEPT", "ALL_ROLES", "ALL EMPLOYEES", "ADD_DEPT", "ADD_ROLE", "ADD_EMPLOYEE", "UPDATE_EMPLOYEE_ROLE"];
function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userview",
            message: "What you want to see?",
            choices: options
        }
    ])
        .then((ans) => {
            // console.log(ans);
            switch (ans.userview) {
                case options[0]:
                    allDepts();
                    break;

                case options[1]:
                    allRoles();
                    break;

                case options[2]:
                    allEmployees();
                    break;
                
                case options[3]:
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "department_name",
                                message: "What department do you want to add?"
                            }
                        ]).then((ans)=>{
                            addDepartment(ans);
                        })
                    break;
                
                case options[4]:
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "role_name",
                                message: "What role do you want to add?"
                            },
                            {
                                type: "input",
                                name: "salary",
                                message: "What is the salary?"
                            }
                        ]).then((ans)=>{
                            addRole(ans)
                        })
                    break;
                
                case options[5]:
                    addEmployee();
                    break;
                
                case options[6]:
                    updateEmployee();
                    break;

                default:
                    break;
            }
        })
}

startApp();
const package=require('dotenv').config();
const inquirer = require('inquirer');

// const queryFunctions = require('./queryFunctions')
const { allDepts, allRoles, allEmployees, addRole, updateEmployee, addEmployee} = require('./queryFunctions');
// const { allRoles } = require('./queryFunctions');
// Connect to database

const options = ["ALL_DEPT", "ALL_ROLES", "ALL EMPLOYEES", "ADD_ROLE", "ADD_EMPLOYEE", "UPDATE_EMPLOYEE_ROLE"];
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
                                name: "role",
                                message: "What role do you want to add?"
                            }
                        ]).then((ans)=>{
                            addRole(ans)
                        })
                    break;
                
                case options[4]:
                    addEmployee();
                    break;
                
                case options[5]:
                    updateEmployee();
                    break;

                default:
                    break;
            }
        })
}

startApp();




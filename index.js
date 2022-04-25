const package=require('dotenv').config();
const inquirer = require('inquirer');

// const queryFunctions = require('./queryFunctions')
const { allDepts} = require('./queryFunctions');
const { allRoles } = require('./queryFunctions');
// Connect to database

const options = ["ALL_DEPT", "ALL_ROLES"];
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

                default:
                    break;
            }
        })
}

startApp();




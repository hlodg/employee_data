const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: 'root',
        database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);
const cTable = require('console.table');

function allDepts() {
    db.connect(function(err){
        if(err) throw err;
        db.query('SELECT * FROM department', function(err, result){
            console.table(result);
            // create formatted table showing data
            if(err) throw err;
        });
    });
};

function allRoles(){
    db.connect(function(err){
        if(err) throw err;
        db.query('SELECT * FROM employees', function(err,result){
            console.table(result);
            // create formatted table showing data
            if(err) throw err;
        })
    })
}

function allEmployees(){
    db.connect(function(err){
        if(err) throw err;
        // fix select so that it is the right data
        db.query('SELECT * FROM employees', function(err,result){
            console.table(result);
            // create formatted table showing data
            if(err) throw err;
        })
    })
}

function addRole(ans){
    db.query('INSERT INTO employees (role_name) VALUES (ans)',function(err,result){
        console.log("We added the role!");
        console.log(ans);
    })
}

function addEmployee(){

}

function updateEmployee(){

}

module.exports = {
    allDepts,
    allRoles, 
    allEmployees,
    addEmployee,
    updateEmployee,
    addRole
}
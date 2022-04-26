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
        db.query('SELECT * FROM positions', function(err,result){
            console.table(result);
            // create formatted table showing data
            if(err) throw err;
        })
    })
}

function allEmployees(){
    db.connect(function(err) {
        if (err) throw err;
        var sql = "SELECT * FROM employee"
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.table(result);
        });
      });
}

function addDepartment(ans){
    db.query('INSERT INTO department SET ?', (ans))
    console.log("We added your department!")
}

function addRole(ans){
    db.query('INSERT INTO positions SET ?', (ans));
    console.log("We added the role!");
    // function(err,result){
    //     console.log(ans);}
    // )
}

function addEmployee(){

}

function updateEmployee(){

}

module.exports = {
    allDepts,
    allRoles, 
    allEmployees,
    addDepartment,
    addEmployee,
    updateEmployee,
    addRole
}
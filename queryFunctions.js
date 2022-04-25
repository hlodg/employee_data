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

function allDepts() {
    db.connect(function(err){
        if(err) throw err;
        db.query('SELECT * FROM department', function(err, result){
            console.log(result);
            if(err) throw err;
        });
    });
};

function allRoles(){
    db.connect(function(err){
        if(err) throw err;
        db.query('SELECT * FROM employees', function(err,result){
            console.log(result);
            if(err) throw err;
        })
    })
}

module.exports = {
    allDepts,
    allRoles
}
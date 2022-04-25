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

const du = require('./index.js');

function allDepts() {
    // db.connect{('SELECT * FROM department', function (err, results) {
    //     console.log(results);
    //     startApp()
    // })

    db.connect(function(err){
        if(err) throw err;
        db.query('SELECT * FROM department', function(err, result){
            console.log(result)
        })
    });
};


module.exports = {
    allDepts
}
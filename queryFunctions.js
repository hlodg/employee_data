const db = require('./index.js')
function allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        // startApp();
    });
}

module.exports = {
    allDepts
    // allDepts : allDepts
}
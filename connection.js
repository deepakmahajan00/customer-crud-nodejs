const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'deep@kM84',
    database: 'node_app'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySql Connected...');
})

module.exports = db;
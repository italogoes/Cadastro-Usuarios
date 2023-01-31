const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'goes1107',
    database: 'crud'
})

module.exports = db
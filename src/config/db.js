const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopping',
    waitForConnections: true,
    connectionLimit: 15
})

module.exports=pool.promise()
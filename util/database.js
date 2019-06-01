const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'ping_mysql',
    password: '58972pink'
});

module.exports = pool.promise();
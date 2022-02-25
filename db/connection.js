const mysql = require('mysql2');

// connect to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // SQL username
    user: 'root',
    // SQL password
    password: '${SunFlower29}',
    database: 'election'
  },
  console.log("Connected to the election database.")
);

module.exports = db;
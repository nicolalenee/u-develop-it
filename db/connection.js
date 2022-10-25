const mysql = require('mysql2');
require('dotenv').config();

// connect to the database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // SQL username
    user: process.env.DB_USER,
    // SQL password
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  },
  console.log("Connected to the election database.")
);

module.exports = db;
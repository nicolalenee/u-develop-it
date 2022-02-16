const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// Test Express.js connection
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   })
// })

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request(Not Found)
app.use((req, res) => {
  res.status(404).end();
})

// start the Express.js server on the PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. View here: http://localhost:${PORT}`);
})
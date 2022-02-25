const express = require('express');
const req = require('express/lib/request');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck')
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


// Delete a candidate
app.delete('/api/candidate/:id', (req, res) => {
  const sql = `DELETE FROM candidates WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Candidate not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});


// Create a candidate
app.post('/api/candidate', ({ body }, res) => {
  const errors = inputCheck(body, 'first_name', 'last_name', 'industry_connected');
  if (errors) {
    res.status(400).json({ errors: errors });
    return;
  }

  const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
  VALUES (?,?,?)`;
  const params = [body.first_name, body.last_name, body.industry_connected];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
})


// Create a candidate
app.get('/api/candidate/:id', (req, res) => {
  const sql = `SELECT candidates.*, parties.name
              AS party_name
              FROM candidates
              LEFT JOIN parties
              ON candidates.party_id = parties.id
              WHERE candidates.id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// Get all candidates
app.get('/api/candidates', (req, res) => {
  const sql = `SELECT candidates.*, parties.name
              AS party_name
              FROM candidates
              LEFT JOIN parties
              ON candidates.party_id = parties.id`;

  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    })
  })
})

// update a candidate's party 
app.put('/api/candidate/:id', (req, res) => {

  
  const errors = inputCheck(req.body, 'party_id');
  if (errors) {
    res.status(400).json({ error: errors });
    return;
  };


  const sql = `UPDATE candidates SET party_id = ?
              WHERE id =?`;
  const params = [req.body.party_id, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Candidate not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// route to get all parties
app.get('/api/parties', (req, res) => {
  const sql = `SELECT * FROM parties`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// route to get a single party 
app.get('/api/party/:id', (req, res) => {
  const sql = `SELECT * FROM parties where id = ?`;
  db.query(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: row
    });
  });
});

// route to delete a single party
app.delete('/api/party/:id', (req, res) => {
  const sql = `DELETE FROM parties WHERE id = ?`;
  const params = [req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'Party not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});


// Default response for any other request(Not Found)
app.use((req, res) => {
  res.status(404).end();
})

// start the Express.js server on the PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. View here: http://localhost:${PORT}`);
})
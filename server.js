const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Test Express.js connection
// app.get('/', (req, res) => {
//   res.json({
//     message: 'Hello World'
//   })
// })

// Default response for any other request(Not Found)
app.use((req, res) => {
  res.status(404).end();
})

// start the Express.js server on the PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. View here: http://localhost:${PORT}`);
})
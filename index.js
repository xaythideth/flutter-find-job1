// index.js
const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Sample route: Get all users
app.use('/users', userRoutes);  // ➜ เช่น GET /users, POST /users

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
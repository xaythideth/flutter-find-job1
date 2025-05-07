// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'erorr404',
  password: 'Sbn_020704',
  database: 'project flutter sbn',
});
module.exports = db;

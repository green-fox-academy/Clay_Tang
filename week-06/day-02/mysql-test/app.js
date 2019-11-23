//app.js
require('dotenv').config();

const PORT = process.env.PORT;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// --------
connection.connect((err) => {
  if (err){
    console.log('Error');
    return;
  };
  console.log('Connected!');
});

// -----------searching
connection.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  rows.forEach( (row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
});

// --------- creating
const employee = { name: 'Winnie', location: 'Australia' };
connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
  if(err) throw err;

  console.log('Last insert ID:', res.insertId);
});

// ------------ updating
connection.query(
  'UPDATE employees SET location = ? Where ID = ?',
  ['South Africa', 5],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);

// ----------- delete
connection.query(
  'DELETE FROM employees WHERE id = ?', [5], (err, result) => {
    if (err) throw err;

    console.log(`Deleted ${result.affectedRows} row(s)`);
  }
);

connection.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
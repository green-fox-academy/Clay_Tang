require('dotenv').config();

const mysql = require('mysql');
const express = require('express');

const PORT = process.env.PORT;
const app = express();

app.set('view engine', 'ejs');

const conn = mysql.createConnection ({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err){
      console.error(err);
      res.status(500).send("DB err");
      return;
    }
    res.render('home', {rows});
    console.log(rows);
  })
})

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));

const mysql = require('mysql');
const express = require('express');

const PORT = 3000;
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');

const conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
});

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, result) => {
    if(err){
      console.error(err);
      res.status(500).send("DB err");
      return;
    }
    res.render('home', {result});
    console.log(result);
  })
})


app.listen(PORT, () => console.log(`App is listening on ${PORT}`));


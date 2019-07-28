const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 5000;
const mysql = require('mysql');

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

//get Query
app.get('/Quiz', (req, res) => {
  mysqlConnection.query('SELECT * FROM QuizList', (err, rows, field) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});

//get specific id Query
app.get('/Quiz/:id', (req, res) => {
  let id = Number(req.params.id);
  mysqlConnection.query(
    `SELECT * FROM QuizList where id=${id}`,
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// starting our Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//connect to mySQL

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Fullmetal_100',
  database: 'Rinu',
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (!err) console.log('DB connection succeeded');
  else {
    console.log(
      'DB connection failed. Error:' + JSON.stringify(err, undefined, 2)
    );
  }
});

//Create a server using Express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mysql = require('mysql');

//Middleware part
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require(`morgan`);
app.use(morgan("dev"));

//Route part, all the path are from /server/api/index.js
app.use("/api", require("./api"));

//Make the server ready to run.
const server = app.listen(port, () => {
  console.log(
    `===========================================>Port ${port} is listening now.`
  );
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mysqlConnection = mysql.createPool({
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: "b51a3d0daa4770",
  password: '43d9010d',
  multipleStatements: true,
  database: 'heroku_1b3f9d32c7d74e0'
})

mysqlConnection.getConnection(err=>{
  if(!err) console.log('DB connection succeeded!');
  else console.log('DB Connection Error: '+ JSON.stringify(err, undefined, 2))
  
})

app.get('/quizs', (req, res)=>{
  mysqlConnection.query('SELECT * FROM quiz',
  (err, rows, field)=>{
    if(!err){
      res.send(rows);
      console.log(rows);
    }
    else(console.log(err))
  })
})

 
//Add an new item without input QuizID
app.post('/quizs', (req, res) => {
  let emp = req.body;
  console.log(emp)
  emp.id = 0;
  
  let sql = 'SET @id = ?;SET @question = ?;SET @option1 = ?;SET @option2 = ?; SET @option3 = ?; SET @option4 = ?; \
  CALL QuizAddOrEdit(@id, @question, @option1, @option2, @option3, @option4)';
  mysqlConnection.query(
    sql, [emp.id, emp.question, emp.option1, emp.option2, emp.option3, emp.option4],
    (err, rows, field) => {
      if (!err) res.send(emp);
      else console.log(err)
    }
  )
})
//Update an item by quizID.
app.put('/quizs', (req, res) => {
  let emp = req.body;
  
  let sql = 'SET @id = ?;SET @question = ?;SET @option1 = ?;SET @option2 = ?; SET @option3 = ?; SET @option4 = ?; \
  CALL QuizAddOrEdit(@id, @question, @option1, @option2, @option3, @option4)';
  mysqlConnection.query(
    sql, [emp.id, emp.question, emp.option1, emp.option2, emp.option3, emp.option4],
    (err, rows, field) => {
      if (!err) res.send('Updated successfully');
      else console.log(err)
    }
  )
})
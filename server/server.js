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

const mysqlConnection = mysql.createConnection({
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: "b51a3d0daa4770",
  password: '43d9010d',
  multipleStatements: true,
  database: 'heroku_1b3f9d32c7d74e0'
})

mysqlConnection.connect(err=>{
  if(!err) console.log('DB connection succeeded!');
  else console.log('DB Connection Error: '+ JSON.stringify(err, undefined, 2))
  
})

app.get('/test', (req, res)=>{
  mysqlConnection.query('SELECT * FROM testtable',
  (err, rows, field)=>{
    if(!err){
      res.send(rows);
      console.log(rows);
    }
    else(console.log(err))
  })
})
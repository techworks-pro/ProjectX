//Create a server using Express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const mysql = require('mysql');

const mysqlConnection = mysql.createPool({ // mysql.createConnectection
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: "b51a3d0daa4770",
  password: '43d9010d',
  multipleStatements: true,
  database: 'heroku_1b3f9d32c7d74e0'
})

mysqlConnection.getConnection(err=>{ // mysqlConnection.connect
  if(!err) console.log('DB connection succeeded!');
  else console.log('DB Connection Error: '+ JSON.stringify(err, undefined, 2))
  
})





//Middleware part
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require(`morgan`);
app.use(morgan("dev"));

// it seems that mysqlConnection has to be exported before app.use("/api", require("./api"))
module.exports = mysqlConnection; 

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

  
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build'))
  })
}




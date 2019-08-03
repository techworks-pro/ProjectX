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


app.get('/', function (req, res, next) {
  fs.readFile('/file-does-not-exist', function (err, data) {
    if (err) {
      next( err) // Pass errors to Express.
    } else {
      res.send("page not found",data)
    }
  })
})


app.listen(port, (err) => {
  if (err) {
    app.use(function (req, res, next) {
      res.status(404).send("Sorry can't find that!")
    })
    return console.log('something bad happened', err)
  }
  
//  checkStatus(404) ? app.use(function (req, res, next) { app.redirect('http://' + req.headers.host + req.url)}) : null;

  console.log(`server is still listening on ${port}`)
})  

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  
  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build'))
  })

//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message, 
//         error: err
//     });
//  });
}




/** THE FOLLOWING CODES ARE HERE FOR REFERENCE */

// var http = require('http'),
//     fs = require('fs'),
//     util = require('util'),
//     url = require('url');

// var server = http.createServer(function(req, res) {
//     if(url.parse(req.url).pathname == '/') {
//         res.writeHead(200, {'content-type': 'text/html'});
//         var rs = fs.createReadStream(()=>{return "homepage"});
//         util.pump(rs, res);
//     } else {
//         res.writeHead(404, {'content-type': 'text/html'});
//       var rs = fs.createReadStream(() => { return "404 error. page not found" });
//         util.pump(rs, res);
//     }
// });

// const server = app.listen(port, () => {
//   console.log(
//     `===========================================>Port ${port} is listening now.`
//   );
// });



// app.listen(port, (err) => {
//   if (err) {
//     return console.log('something bad happened', err)
//   } else console.log(`server is listening on ${port}`) ;
// })


//Make the server ready to run.
// const server = app.listen(port, () => {
//   console.log(
//     `===========================================>Port ${port} is listening now.`
//   );
// });

// this one can override anything from running react
// app.get('/', (request, response) => {
//   response.send('Hello from Express!')
// })

// app.use(function (req, res, next) {
//   res.status(404).send(() => redirect(("Sorry can't find that! Here is what you can do now! if it is a try reloading just ")))
//   // res.status(404).redirect('http://' + req.headers.host + req.url)
// })

//Create a server using Express
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;


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

  app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


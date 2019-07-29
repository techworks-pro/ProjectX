//Create a server using Express
const express = require("express");
const app = express();
const port = 4000;

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

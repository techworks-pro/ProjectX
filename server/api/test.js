//create a router
const router = require("express").Router();
//test data
let message = `This a test message from 'http://localhost:4000/api/test'.`;

//This is a get request example, the path is localhost:4000/api/test
router.get("/", (req, res) => res.send(message));

/*
Add your other routes and apis here.
The path is 'localhost:4000/api/test'
*/

module.exports = router;

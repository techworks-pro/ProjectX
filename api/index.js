//Set up a Route component, as a center route
const router = require("express").Router();

//Server route '/api/quizs'
router.use("/quizs", require("./quizs"));
//Server route '/api/sourceCodes'
router.use("/sourceCodes", require("./sourceCodes"));
//Server route '/api/users'
router.use("/users", require("./users"));
//Add you new route below

//similar to export default in react
module.exports = router;
let quizs = "This quiz is from ./server/api/quizs.js";

const router = require("express").Router();

//This is a get request, the route is '/api/quizs'
//For querying all items.
router.get("/", (req, res) => res.send(quizs));

//This is a get request, the route is '/api/quizs/:id'
//For querying an item by the argument from url.
router.get("/:id", (req, res) => {
  //Type of 'req.params.id' is string.
  let id = Number(req.params.id);
  for (let i = 0; i < quizs.length; i++) {
    if (quizs[i].id === id) res.send(quizs[i]);
  }
});

//This is a post request, the route is '/api/quizs'
//For adding a new item.
//should get a prameter call name which is from request.
router.post("/", (req, res) => {
  let newId = quizs.length + 1;
  let newExample = {
    id: newId,
    name: req.body.name
  };
  quizs.push(newExample);
  res.send(quizs);
});

//This is a put request, the route is '/api/students'
//For updating a new item.
//should get a prameter call id which is from url
router.put("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  let studentIndex = 0;
  let findId = false;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students[i].name = req.body.name;
      studentIndex = i;
      findId = true;
      break;
    }
  }
  if (findId) res.send(students[studentIndex]);
  else res.send(`Cannot find the id.`);
});

//This is a post request, the route is '/api/students'
//For deleting a new item.
//should get a prameter call id which is from request
router.delete("/:id", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  students = students.filter(el => el.id !== id);
  res.send(students);
});

//similar to export defaul
module.exports = router;

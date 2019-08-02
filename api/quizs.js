// let quizs = "This quiz is from ./server/api/quizs.js";

const router = require("express").Router();

const mysqlConnection = require('../server')


router.get('/', (req, res) => {
  
  mysqlConnection.query('SELECT * FROM quiz',
  (err, rows, field)=>{
    if(!err){
      res.send(rows);
    }
    else(console.log(err))
  })
})

 
//Add an new item without input QuizID
router.post('/', (req, res) => {
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
router.put('/', (req, res) => {
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

//similar to export default
module.exports = router;









/** -----------------------------THESE CODES ARE FOR REFERENCE ONLY-----------------------------------------  */



//This is a put request, the route is '/api/students'
//For updating a new item. should get a prameter call id which is from url
router.put("/:idDFSADFSF", (req, res) => {
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
router.delete("/:idADFSDFDSF", (req, res) => {
  //Type of 'req.params.id' is string
  let id = Number(req.params.id);
  students = students.filter(el => el.id !== id);
  res.send(students);
});


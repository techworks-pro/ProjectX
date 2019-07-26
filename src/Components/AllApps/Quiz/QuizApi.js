const express = require('express');
const app = express();
const morgan = require('morgan');
const quiz = require('./Quiz');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const All;
app.get('/Quiz', (req, res) => {
  console.log(hi);
  All = res.json(quiz.Quiz);
});
app.get('/Quiz/:id', (req,res)=>{
    // let id=Number(req.params.id);
    res.send(quiz.Quiz[id].Question)

})

export default All;

app.listen(4000, () => console.log('server running'));

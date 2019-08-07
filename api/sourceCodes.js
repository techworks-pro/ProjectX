const router = require("express").Router();
const mysqlConnection = require('../server')


router.get('/', (req, res) => {
  
  mysqlConnection.query('SELECT * FROM source',
  (err, rows, field)=>{
    if(!err){
      res.send(rows);
    }
    else(console.log(err))
  })
})

module.exports = router;
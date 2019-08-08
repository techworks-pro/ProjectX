const router = require("express").Router();
const mysqlConnection = require('../server')


router.get('/', (req, res) => {
  
  mysqlConnection.query('SELECT * FROM sourcetb',
  (err, rows, field)=>{
    if(!err){
      res.send(rows);
    }
    else(console.log(err))
    })
})

router.post('/add', (req, res) => {
  let { app_id, sourcetb_id, app_name, sourcetb_name, sourcetb_data } = req.body;
  console.log(req.body)
  app_id = 0;
  
  let sql = 'SET @app_id = ?;SET @sourcetb_id = ?;SET @app_name = ?;SET @sourcetb_name = ?; SET @sourcetb_data = ?; \
  CALL SourceAddOrEdit(@app_id, @sourcetb_id, @app_name, @sourcetb_name, @sourcetb_data)';
  mysqlConnection.query(
    sql, [ app_id, sourcetb_id, app_name, sourcetb_name, sourcetb_data],
    (err, rows, field) => {
      if (!err) res.send(rows);
      else console.log(err)
    }
  )
})

module.exports = router;
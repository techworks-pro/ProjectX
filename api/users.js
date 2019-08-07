const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mysqlConnection = require('../server');
//@route   Post api/user
//@desc    Register new user
//@access  Public
router.post(
  '/',
  [
    check('username', 'Name is required')
      .not()
      .isEmpty(),
    check('firstName', 'firstName is required')
      .not()
      .isEmpty(),
    check('lastName', 'lastName is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password, firstName, lastName, phone } = req.body;
      try {
        
          
    // a. See if user exists 
          console.log("1============")
          let toCheck = false;
            mysqlConnection.query(
                'SELECT * FROM user WHERE email = ?;',
                [email],
                (err, rows, field) => {
                    if (!err && rows.length > 0) {
                        toCheck = true;
                      console.log("2========================")
                      return rows;
                  } else {
                      return rows;
                  }
                }
          );
          
          if (toCheck) {
              console.log("email exists already =======================")
              return res.send("email exists already =========================")
          }
                  // Promise.all()
              console.log('3===========>')
              
          
            //   console.log("error inside error: ", error)
      

          if (checkbyEmail.json()) {
            console.log('user exists');
            return res.status(400).send('the user exists');
          }
      
      // b. Get new user gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      //d. Encrypt password
      const salt = await bcrypt.genSalt(10);
      const userPassword = await bcrypt.hash(password, salt);
      
      // e. create the a new user in database
      const id = 0;
      let user = '';
      let sql =
        'SET @id = ?;SET @username = ?;SET @email = ?;SET @pass = ?; SET @firstName = ?; SET @lastName = ?; SET @phone =?; SET @avatar =?;\
      CALL UserAddOrEdit(@id, @username, @email, @pass, @firstName, @lastName, @phone, @avatar)';
      mysqlConnection.query(
        sql,
        [id, username, email, userPassword, firstName, lastName, phone, avatar],
        (err, rows, field) => {
          if (!err)
            return res.status(200).send('Created a new user sucessfully.');
          else {
              if (err.errno == 1062) {
                  return res.status(400).send('the email already exists.')
              } else {
                return res.status(400).send("server error");
              }
            
            // return res.status(400).send('Server Error:', err);
          }
        }
      );
      //   // f. Return json-web-token
      //   const payload = {
      //     user: {
      //       id: user.id
      //     }
      //   };
      //   jwt.sign(
      //     payload,
      //     'mysecrettoken',
      //     {
      //       expiresIn: 360000
      //     },
      //     (err, token) => {
      //       if (err) throw err;
      //       res.json({ token: token });
      //     }
      //   );
      if (toCheck) {
        console.log("email exists already =======================")
        return res.send("email exists already =========================")
    }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error:', err.message);
    }
  }
);
router.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM user WHERE =? ;', ['first.gusdfsdfsfsfdsfy@email.com'], (err, rows, field) => {
    if (!err) {
      res.send(rows);
    } else console.log(err);
  });
});
module.exports = router;

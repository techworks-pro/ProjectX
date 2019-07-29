### `This app is an express boilerplate ready for adding new route.`

## Available Scripts

### After you pull the repo, run this command in terminal.

```bash
$ npm install
```

In the server folder, you can run:

#### `node server.js`

#### or

#### `nodemon server.js`

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

#### `control + c`

Quit the development mode.

### `Dependencies`

- express
- morgan
- nodemon

### 1. How to add a new route.

`Step 1: Create a new file in api folder, for example, name it 'newRoute.js'`

#### `Location: ./api/newRoute.js`

```js
//create a router
const router = require("express").Router();
//test data
let message = `This a test message from 'http://localhost:4000/api/newRoute'.`;

//This is a get request example, the path is localhost:4000/api/newRoute
router.get("/", (req, res) => res.send(message));

/*
Add your other routes and apis here.
The path is 'localhost:4000/api/newRoute'
*/

module.exports = router;
```

`Step 2: import your new file in ./api/index.js`

#### `Location: ./api/index.js`

```js
//Set up a Route component, as a center route
const router = require("express").Router();

//Server route '/api/students'
router.use("/examples", require("./examples"));
//Server route '/api/newRoute'
router.use("/newRoute", require("./newRoute"));
//Add you new route below

//similar to export default in react
module.exports = router;
```

`Step 3: Test`

- Run terminal command

```bash
$ node server.js
```

- Open [http://localhost:4000/api/newRoute](http://localhost:4000/api/newRoute) to view it in the browser, if you get this message in the browser that means your add a new route successfully.

```bash
This a test message from 'http://localhost:4000/api/newRoute'.
```

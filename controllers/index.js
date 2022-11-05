const express = require('express'); //get the express package
const fruits = require('../models/fruits'); //<--get our fruits array
const router = express.Router(); //<-- we CANOT do const app = express() because we did that in server.js. 
//Therefore we must do const router = express.Router() and replace
//all the app.get to router.get


//route 1
router.get("/fruits/", (req, res) => {
    // res.send(fruits);

    // we are going to show a TEMPLATE
    res.render(`all.ejs`, { fruits })

});

//route 2
router.get("/fruits/:indexOfFruitsArray", (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});


module.exports = router; //<---- making this router (our 2 routes) exportable
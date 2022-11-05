require("dotenv").config();
const express = require("express");
const fruitController = require('./controllers/index'); //
const app = express();
app.use(express.static(__dirname + '/public'));//<---- this line serves up the css static files to our template
app.use(fruitController); //<--- middle ware to use the routes

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});

const dotenv = require('dotenv');
const bodyParser =  require("body-parser");
const express = require('express');
const app = express();
dotenv.config();
const connection = require('./services/dbm/db')
const Routers = require('./services/router/router')
app.listen(process.env.PORT, () => {
    console.log(`Application is listening at port ${process.env.PORT}`)
})

app.get("/",(req,res) => {
    console.log("hello")
    res.send("hello")
})

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

Routers(app)

module.exports = app 
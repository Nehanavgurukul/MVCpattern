const connect = require("./connection");
const signup = require("./signup");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
// app.use(express.json());
const PORT = 6000;


app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
});
const express = require("express");
const signup = require("./signup")
const login = require("./login")
const gettoken = require("./gettoken")
const app = express();
app.use(express.json())
const PORT = 6000;

app.use(signup)
app.use(login)
app.use(gettoken)
app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
});







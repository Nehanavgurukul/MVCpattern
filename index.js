const exp = require("constants");
const express = require("express");
const app = express();
app.use(express.json())
const PORT = 6000;

app.use('/',require('./signup'))
app.use("/",require("./login"))
app.use('/',require('./gettoken'))
app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
});







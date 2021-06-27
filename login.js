const knex = require("./connection");
const express = require("express");
const app1 = express.Router();
const jwt = require("jsonwebtoken");



app1.post("/login",(req,res) => {
    knex.select("*").from ("nehaMVC")
    .then((data) => {
        for(var i = 0; i<data.length;i++){
            if(data[i]["email"] == req.body.email && data[i]["password"] == req.body.password){
                const Token = jwt.sign({email : req.body.email,password : req.body.password},"nehamvc")
                res.send({Token : Token});
            }else{
                console.log("invalid details..")
                res.send("invalid details")
            }
        }
    })
})



module.exports = app1;
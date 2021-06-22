const express = require("express");
const app = express();
const bodyparser =require("body-parser");
const knex = require("./connection");
app.use(bodyparser.json())
const connection = require ("./connection")

app.post("/login",(req,res) => {
    knex.select("*").from ("tableMVC")
    .then((data) => {
        for(var i = 0; i<data.length;i++){
            if(data[i]["name"] == name){
                console.log("login done")
                res.send("login done")
            }
        }
    })
    let name = req.body.name
    let age = req.body.name

})
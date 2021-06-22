const knex = require("./connection");
const express = require('express')
const app = express()
app.use(express.json());
const router = express.Router()

app.post("signup",(req,res) => {
    knex.select("name").from("tableMVC").where("name",req.body.name)
    .then((data) => {
        if(data.length > 0){
            for(var i = 0;i<data.length;i++){
                if(data[i]["id"] == req.body.name){
                    console.log("ur name is already signup");
                    res.send("ur signup is already");
                }
            }
        }else{
            if(data.length <1){
                knex.insert({
                    name : req.body.name,
                    batch : req.body.batch,
                    subject : req.body.subject
                })
                .then((data) => {
                    console.log("data inserted")
                    res.send("data insered")
                })
            }
        }
    })

});


module.exports = router;
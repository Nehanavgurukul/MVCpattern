const knex = require("./connection");
const express = require('express')
const route = express.Router()
// const Route = express()
// Route.use(express.json());


// route.post("/signup",(req,res) => {
//     knex.select("name").from("neha").where("name",req.body.name)
//     .then((data) => {
//         if(data.length > 0){
//             console.log("hhh")
//             for(var i = 0;i<data.length;i++){
//                 if(data[i]["name"] == req.body.name){
//                     console.log("this user is already there");
//                     res.send("this user is already there");
//                 }
//             }
//         }else{
//             if(data.length <1){
//                 knex("neha")
//                     .insert({
//                         name : req.body.name,
//                         batch : req.body.batch,
//                         subject : req.body.subject
//                     })
//                     .then((data) => {
//                         console.log("data inserted")
//                         res.send("data inserted")
//                     })
//                     .catch((err) => {
//                         console.log(err);
//                         res.send(err)
//                     })
//             }
//         }
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send(err)
//     })

// });


// module.exports = route;



route.post("/signup",(req,res) => {
    knex.select("email").from("nehaMVC").where("email",req.body.email)
    .then((data) => {
        if(data.length > 0){
            for(var i = 0;i<data.length;i++){
                if(data[i]["email"] == req.body.email){
                    console.log("this user is already there");
                    res.send("this user is already there");
                }
            }
        }else{
            if(data.length <1){
                knex("nehaMVC")
                    .insert({
                        name : req.body.name,
                        email : req.body.email,
                        password : req.body.password,
                        batch : req.body.batch,
                        subject : req.body.subject
                    })
                    .then((data) => {
                        console.log("data inserted")
                        res.send("data inserted")
                    })
                    .catch((err) => {
                        console.log(err);
                        res.send(err)
                    })
            }
        }
    })
    .catch((err) => {
        console.log(err);
        res.send(err)
    })

});


module.exports = route;
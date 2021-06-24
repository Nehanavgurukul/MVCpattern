const express = require("express");
const app = express();
// const knex = require("./connection");
// const route = require('./signup');
const app1 = require('./login');


app.get('/gettoken',verifyToken,(req,res) => {
    jwt.verify(req.Token,"nehamvc",(err,authdata) => {
        if(err){
            console.log(err)
        }else{
            console.log("verification successfully")
            res.send({message : "verification successfully",
            authdata : authdata});
        }
    })
});

function verifyToken(req,res,next){ 
    const bearerHeader = req.headers["authorization"]
    if(bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        req.Token = bearerToken;
        next()
    };
};















const mysql = require("mysql");

const knex = require("knex")({
    client : "mysql",
    connection : ({
        host : "localhost",
        username : "rooot",
        password : "Neha@1234",
        database : "MVCpatternDB"
    })
})

knex.schema.hasTable("tableMVC").then((existe) => {
    if(!existe){
        return knex.schema.createTable("tableMVC",(table) => {
            console.log(1)
            table.increments("id").primary(),
            table.string ("name"),
            table.string ("batch"),
            table.string ("subject")
        })
    }
    console.log(2)
})

module.exports = knex;
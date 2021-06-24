const mysql = require("mysql");

const knex = require("knex")({
    client : "mysql",
    connection : ({
        host : "localhost",
        user : "root",
        password : "Neha@1234",
        database : "MVCpatternDB"
    })
})

knex.schema.hasTable("nehaMVC").then((existe) => {
    if(!existe){
        return knex.schema.createTable("nehaMVC",(table) => {
            table.increments("id").primary(),
            table.string ("name"),
            table.string ("email"),
            table.string ("password"),
            table.string ("batch"),
            table.string ("subject")
        })
    }
})

module.exports = knex;




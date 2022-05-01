const express = require('express')
const {graphqlHTTP} = require("express-graphql")
const bodyParser = require("body-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const sql = require("sqlite3")
require("dotenv").config()
const schema = require("./Schemas")
const userData = require("./data/MOCK_DATA.json")

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.use("/graph", graphqlHTTP({
    schema,
    graphiql: true
}))

app.get("/", (req, res)=>{

    res.status(200).send(userData)
})

app.listen(7000, ()=>console.log("App listening on port 7000"))
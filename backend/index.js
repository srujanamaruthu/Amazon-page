const express = require('express')
const app = express()

const connectdb = require('./config/db')
const productRoute = require("./router/productRoute")
const authroute = require('./router/authRouter')

app.use(express.json())

connectdb()

app.use("/api/v1", productRoute)
app.use("/auth", authroute)

app.get("/", (req, res) => {
    res.send("pokemon Tracker Server Working")
})

app.listen(3002, () => {
    console.log("server started")
})
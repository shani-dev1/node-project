
const mongoose =require('mongoose')
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConnection")

const PORT = process.env.PORT || 7001
const app = express()
connectDB()

//middlewares

app.use(cors(corsOptions))
app.use(express.json())

//routes



mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
})
mongoose.connection.on('error', err => {
    console.log(err)
})


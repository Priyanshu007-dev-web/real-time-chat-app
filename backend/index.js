import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
const app = express()

dotenv.config()
const port = process.env.PORT || 5000

app.listen(port, (req, res) => {
    connectDb()
    console.log(" server listen at the port ", port)
})
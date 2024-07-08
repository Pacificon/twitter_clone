import express from "express"
import dotenv from "dotenv";
import databaseConnection from "./config/database.js"
const app = express();

dotenv.config({
    path: ".env"
})
databaseConnection();





app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`)
})
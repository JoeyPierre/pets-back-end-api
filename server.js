import db from"./db/connection.js";
import express from "express";
import logger from "morgan";
import chalk from "chalk";
const app= express()
const PORT = process.env.PORT || 3000;

app.use(logger("dev"));





db.on("connected", () => {
    console.clear();
    console.log(chalk.blue("connected to MongoDB!"))
    appp.listen(PORT, ()=>{
        console.log('expresss server running on port: ${PORT}');
    }
    );
})
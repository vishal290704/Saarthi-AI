import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express() 

const PORT = process.env.PORT || 6000

app.get("/", (req,res)=>{
    res.send("Hello from Gateway")
})

app.listen(PORT, ()=>{
    console.log(`Gateway started ${PORT}`)
})
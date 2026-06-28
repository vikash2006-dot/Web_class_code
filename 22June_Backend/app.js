const express=require("express");
const app=express();
const dotenv=require("dotenv");
dotenv.config();

const PORT=process.env;
console.log(PORT);




app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
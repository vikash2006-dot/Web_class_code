const express=require("express")
const app= express();
const port=3000;
const fs=require("fs")
let i=0;

app.use((req,res,next)=>{
    i++;
    const timestamp= new Date();
    console.log(timestamp)
    const log =`client data =${i},${timestamp}`;
    fs.appendFileSync("./log.txt",log,"utf-8")
    next();
})

app.get("/",(req,res)=>{
    res.send("Home page .....")
})

app.post("/register",(req,res)=>{
    res.send("user registered successfully")
})

app.listen(port,()=>{
    console.log("server is running at 3000")
})


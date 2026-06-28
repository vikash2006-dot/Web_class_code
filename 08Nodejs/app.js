const express=require("express")
const app= express();
const port=3000;
const fs=require("fs");
const { json } = require("stream/consumers");

app.use(express,json());
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Home page .....")
})

app.post("/register",(req,res)=>{
    res.send("user registered successfully")
    console.log(req.body())
})

app.listen(port,()=>{
    console.log("server is running at 3000")
})

const express=require("express")
const mongoose=require("mongoose")

const app=express();
mongoose.connect("mongodb://localhost:27017/Hitech")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));

app.get("/result/:year/:roll",(req,res)=>{
    res.send("fail hai bhai....")
})

app.listen(3000,()=>{
    console.log(`Server is running on port : ${3000}`)
})
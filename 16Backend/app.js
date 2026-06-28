const express = require("express");
const app=express()
const mongoose=require("mongoose");

app.set("view engine","ejs")
mongoose.connect("mongodb://127.0.0.1:27017/Mirai")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));

const studentSchema=new mongoose.Schema({
    name:"String",
    age:Number,
    course:"String"
})
// model
const Student=mongoose.model("Student",studentSchema);

app.set()

app.get("/",async (req,res)=>{
    let allstudents=await Student.find();// async task
    console.log(allstudents);
    // res.send(allstudents);
    let adult=allstudents.filter(allstudents=>allstudents.age>18);
    res.render("student.ejs",{adult})
})




app.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})
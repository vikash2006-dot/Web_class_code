const express = require("express");
const app=express()
const mongoose=require("mongoose");

app.use(express.json()); //for JSON data parsing
app.use(express.urlencoded({ extended: true })); // for application

app.set("view engine","ejs")
// mongoose.connect("mongodb://127.0.0.1:27017/Mirai")
mongoose.connect("mongodb+srv://vk2542883_db_user:vikash123@cluster0.2mzsngi.mongodb.net/?appName=Cluster0")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));
const studentSchema=new mongoose.Schema({
//     name:"String",
//     age:Number,
//     course:"String"
    name:{
        type:String,
        required:true,
        minlength:3
    },
    age:{
        type:Number,
        min:18,
        required: false
    },
    email:{
        type:String,
        minlength:4,
        required:true
    }
})
// model
const Student=mongoose.model("students",studentSchema);


app.get("/",async (req,res)=>{
    let allstudents=await Student.find();// async task
    console.log(allstudents);
    // res.send(allstudents);
    let adult=allstudents.filter(allstudents=>allstudents.age>18);
    res.render("student.ejs",{adult})
})

app.get("/insertdata",(req,res)=>{
    res.render("form.ejs")
})

app.post("/createdata",async (req,res)=>{
    let obj={
        "name":"Rahul",
        age:24
    }
    console.log(req.body);
    
    let data=await Student.create(req.body)
    console.log(data)
    res.send("data saved successfully")
})


app.listen(3000,()=>{
    console.log(`server is running at port 3000`);
})
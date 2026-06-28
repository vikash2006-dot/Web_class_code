const express=require("express")
const app=express()

app.set("view engine","ejs")

// file se read karke aaya ya db se karke aaya
let student={
    name:"dipesh Singh",
    roll:30,
    age:2
}

let color="red";
let flag=5;

app.get("/",(req,res)=>{
    // res.send("home page..........")
    // res.render("user",{student,color,flag});
    
})

app.listen(3000,()=>{
    console.log("server is running at 3000")
})
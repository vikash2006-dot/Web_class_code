const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=4000;



mongoose.connect("mongodb://127.0.0.1:27017/MIRAI_COLLEGE")
// mongoose.connect("mongodb+srv://sagar01krcodes_db_user:sagar123@cluster0.xuku8fx.mongodb.net/HI_TECH_MIRAI?appName=Cluster0")
.then(() =>console.log("DB Connected"))
.catch(err =>console.log(err));



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");

//student Schema:--
// const studentSchema=new mongoose.Schema({
//     name:"String",
//     age:Number,
//     course:"String"
// })

const studentSchema=new mongoose.Schema({
      name:{
        type:String,
        required:true,
        minlength:3
      },
      age:{
        type:Number,
        min:18,
        required:true
      },
      email:{
        type:String,
        minlength:5,
        required:true
      }

})

//model 
const Student=mongoose.model("students",studentSchema);


app.get("/", (req,res)=>{
    res.render("home.ejs");
})





////////////////////updating /////////////////////////////////////////

app.get("/test",async (req,res)=>{
    let updated= await Student.updateMany({name:"Alphajump"},{name:"BetaJump"});
    let allStudent= await updated.find({name:"Alphajump"})
    res.render("students.ejs",{allStudent})
})

/////////////////////////////////////////////////////////////////////



app.get("/edit/:userid",async (req,res)=>{
    let data=await Student.findById(req.params.userid);
    res.render("edit.ejs",{data});
})

app.post("/update/:userid",async(req,res)=>{
    let data= await Student.findByIdAndUpdate(req.params.userid,req.body,{new: true});
    res.redirect("/getdata");
})

app.get("/getdata",async (req,res)=>{
    
    // res.send(allStudent);
    // console.log(allStudent);
    let allStudent= await Student.find();
    res.render("students.ejs",{allStudent})   

})

app.get("/delete/:userid",async(req,res)=>{
    console.log(req.params.userid);
    let deldata= await Student.findByIdAndDelete(req.params.userid);
    res.redirect("/getdata");
})


app.get("/insertdata",(req,res)=>{
    res.render("form.ejs");
})




app.post("/createdata", async (req,res)=>{
    let data=req.body;
    let data2=await Student.create(data)
    res.send(`data save sussecfully data is ${data2}`);
    console.log(data2);
})


app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
    
})
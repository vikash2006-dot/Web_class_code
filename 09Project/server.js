const express=require("express")
const fs=require("fs")
const app=express()
const port=3000

// form data parse karne ke liye
app.use(express.urlencoded({extended:true}))

// public folder serve karna
app.use(express.static("public"))

// registration route
app.post("/register",(req,res)=>{
    const Data=req.body;
    fs.appendFileSync("data.json",JSON.stringify(Data) +'\n',(err)=>{
        if(err){
            return res.send("Error saving data");
        }
        res.send("Registration Successful");

    });   
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
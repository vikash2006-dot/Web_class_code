const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.json({
        "name":"Parth Sarthi",
        "college":"Mirai School of Technology"
    })
})

app.get("/result/:year/:roll",(req,res)=>{
    console.log(req.params);
    res.send("fail hai bhai....")
})
app.get(("/search"),(req,res)=>{
    console.log(req.query)
    res.send("data mil gya ya koi mil gya")
})

app.listen(3000,()=>{
    console.log(`Server is running on port : ${3000}`)
})
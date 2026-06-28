let express =require("express")
const app=express();
const port=5001
app.use((req,res,next)=>{
    console.log("middleware 1");
    // authentication
    let auth=false;
    if(!auth){
        res.send("auth failed.. try again")
    }
    else{
        next();
    }
    
})

app.post("/")
app.get("/",(req,res)=>{
    res.send("home page...")
})

app.get("/about",(req,res)=>{
    res.send("home page...")
})

app.listen(5001,()=>{
    console.log("server is running at 3000")
})
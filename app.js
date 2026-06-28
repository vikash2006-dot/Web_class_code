const express=require("express");
const connectDB=require("./config/db.js");
const Auth=require("./middleware/middle.js");
const productRouter=require("./router/ProductRouter.js")

connectDB();
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs")
app.use(Auth);
app.use("/",productRouter);
app.listen(3000,()=>{
    console.log(`server is running at ${3000}`);   
})
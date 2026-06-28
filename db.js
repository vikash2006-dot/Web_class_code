const mongoose=require("mongoose");

const connectDB= async ()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/Product")
        console.log("DB Connected");        
    }
    catch(err){
        console.log(err);       
    }
};
module.exports= connectDB;
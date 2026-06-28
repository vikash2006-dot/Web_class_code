const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        minlength:2,
        required:true
    },
    Department:{
        type:String,
        minlength:2,
        required:true
    },
    Price:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("Store",productSchema);
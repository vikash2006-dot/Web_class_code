const mongoose=require("mongoose");
const products=require("../models/products")

const productController={
    home:(req,res)=>{
        res.render("home.ejs");
    },
    getProduct:async(req,res)=>{
        const allProducts= await products.find();
        res.render("productList.ejs",{allProducts})
    },
    addProduct: async(req,res)=>{
        res.render("form.ejs")
    },
    createProduct: async(req,res)=>{
        req.body.ip=req.ip;
        const data=await products.create(req.body);
        res.redirect("/getdata");
    },
    editProduct:(req,res) =>{
        res.render("edit.ejs");
    }

}


module.exports=productController;
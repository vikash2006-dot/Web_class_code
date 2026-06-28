const express=require("express");
const router=express.Router();

const productController=require("../controller/productController")

router.get("/",productController.home)
router.get("/getdata",productController.getProduct);
router.get("/addproduct",productController.addProduct)
router.post("/createproduct",productController.createProduct)
  

module.exports=router;
const express=require('express');
const Model=require('../model/ProdModel');
const router=express.Router();

router.get("/",async(req,res)=>{
    try {
        const products=await Model.find({});
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})

module.exports=router;
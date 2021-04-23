const express=require('express');
const mongoose=require('mongoose');
const connectDB=require('./config/db');
const ProductRouters=require('./controller/router');

connectDB();

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{res.send("Greetings")})
app.use("/products",ProductRouters)

app.listen(5151,()=>console.log("server start"))
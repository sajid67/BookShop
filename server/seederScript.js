const Model=require('./model/ProdModel');
const connectDB=require('./config/db');
const products = require('./Data/Products');

connectDB();

const importDB=async()=>
{
    try {
       await Model.deleteMany({});
       await Model.insertMany(products)
       console.log("Data Import Success");

    } catch (error) {
        console.log("Data not imported" ) 
    }
}
importDB();
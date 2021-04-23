const mongoose=require('mongoose');

const MONGO_URI="mongodb+srv://dbuser:db123@cluster0.oz5cq.mongodb.net/mernstack?retryWrites=true&w=majority"
const connectDB=()=>
{
    try {
        mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true,
            useFindAndModify:false
        })
        console.log("Mongoose Connected")
    } catch (error) {
        console.log("Mongoose not Connected")
    }
}
module.exports=connectDB;
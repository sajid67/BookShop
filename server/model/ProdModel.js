const mongoose=require('mongoose');

const Products= mongoose.Schema({
    title:{
        type:String,
    },
    pageCount:{
        type:Number,
    },
    image:{
        type:String,
    },
    shortDescription:{
        type:String,
    },
    longDescription:{
        type:String,
    },
    status:{
        type:String,   
    }

})

const Model=mongoose.model('Model',Products);

module.exports=Model;
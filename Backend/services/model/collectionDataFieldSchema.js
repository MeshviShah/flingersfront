const mongoose  = require('mongoose')


const collectionDataFieldSchema = new mongoose.Schema({

    labelName : {
        type: String
        },
    mendatory:{
        type:Boolean
    },
    fieldtype:{
        type:String,   
    },
    appuse:{
        type:String
    },
    adminUse:{
        type:String,   
    },
    collection_id:{
        type:mongoose.Schema.ObjectId
    },
    sequance:{
        type:String
    }
 
})

module.exports = mongoose.model('collectionDataField' , collectionDataFieldSchema)
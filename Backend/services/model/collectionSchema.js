const mongoose  = require('mongoose')


const collectionSchema = new mongoose.Schema({

    

    collection_name : {
        type: String
        },
    status:{
        type:Boolean
    },
    createid:{
        type:Date,
        
    },
    updatedid:{
        type:Date
    }
 
})

module.exports = mongoose.model('collection' , collectionSchema)
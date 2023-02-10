const mongoose  = require('mongoose')


const collectionArchiveSchema = new mongoose.Schema({

    
    collectionrecord_id:{
        type:mongoose.Schema.ObjectId
    },
    archive_id:{
        type:mongoose.Schema.ObjectId
    }
    
})

module.exports = mongoose.model('collectionArchive' , collectionArchiveSchema)
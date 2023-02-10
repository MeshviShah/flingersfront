const mongoose = require('mongoose');

const archiveSchema = new mongoose.Schema({
    name : {
        type:String,
    },
    status:{
        type:Boolean
    }
})

module.exports  = mongoose.model('archive' , archiveSchema)
const mongoose = require('mongoose');

const activeCollectionSchema = new mongoose.Schema({
    collection_id:{
        type:mongoose.Schema.ObjectId,
    },
    user_id:{
        type:mongoose.Schema.ObjectId,
    }

})

module.exports = mongoose.model("activeCollection",activeCollectionSchema)
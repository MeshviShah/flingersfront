const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');


const deviceTokenSchema = new mongoose.Schema({
    devicetoken : {
        type : String
    },
    devicetype:{
        type : String
    },
    user_id:{
        type :mongoose.Schema.Types.ObjectId
    },
})

module.exports = mongoose.model('deviceToken' , deviceTokenSchema)
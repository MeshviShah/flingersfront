const mongoose = require('mongoose')

const payloadValidateSchema = new mongoose.Schema({
    payloadkey:{
        type:String,
    }
})

module.exports = mongoose.model("payloadValidate" , payloadValidateSchema)
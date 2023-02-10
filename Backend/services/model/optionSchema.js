const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
    option_name:{
        type:String,
    },
    datafield_id:{
        type:mongoose.Schema.ObjectId,
    }

})

module.exports = mongoose.model("option",optionSchema)
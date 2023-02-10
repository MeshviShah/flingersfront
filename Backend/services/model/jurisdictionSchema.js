const mongoose = require('mongoose');


const jurisdictionSchema = new mongoose.Schema({
    jurisdiction_id : {
        type : Number
    },
    jurisdiction_name:{
        type : String
    },
    created_by:{
        type : Date
    },
    updated_by:{
        type : Date
    }

})


module.exports = mongoose.model('jurisdiction' , jurisdictionSchema)
const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
    // user_id : {
    //     type : mongoose.Schema.Types.ObjectId
    // },
    first_name : {
        type : String
    },
    last_name:{
        type : String
    },
    org_id:{
        type :mongoose.Schema.ObjectId
    },
    email:{
        type : String,
        required: true,
        //match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, `Please fill valid email address`],
    },
    phone:{
        type : String,
        //min: 0, max: 10, default: 0 
        //match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    status:{
        type : Boolean
    },
    password:{
        type : String,
        required: true
    },
    title:{
        type : String
    },
    roleid:{
        type : mongoose.Schema.ObjectId
    }

})


module.exports = mongoose.model('adminUser' , adminUserSchema)
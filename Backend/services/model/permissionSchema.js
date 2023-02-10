const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    per_name:{
        type:String,
    },
    permission_catid:{
        type:mongoose.Schema.ObjectId,
    }

})

module.exports = mongoose.model("permission",permissionSchema)
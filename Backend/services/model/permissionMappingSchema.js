const mongoose = require('mongoose');

const permissionMappingSchema = new mongoose.Schema({
    permission_id:{
        type:mongoose.Schema.ObjectId,
    },
    role_id:{
        type:mongoose.Schema.ObjectId,
    }

})

module.exports = mongoose.model("permissionMapping",permissionMappingSchema)
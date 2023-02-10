const mongoose = require('mongoose')

const permissionModuleSchema = new mongoose.Schema({
    catname:{
        type:String,
    }
})

module.exports = mongoose.model("permissionModule" , permissionModuleSchema)
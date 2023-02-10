const { mongo, default: mongoose } = require("mongoose")


const roleSchema = new mongoose.Schema({
   role_id : {
        type:mongoose.Schema.Types.ObjectId,
   },
   role_name : {
        type:String,
   }
})

module.exports = mongoose.model('role' , roleSchema)
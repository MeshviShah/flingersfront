const mongoose  = require('mongoose')



const collectionMemberSchema = new mongoose.Schema({
    user_id : {
        type:mongoose.Schema.ObjectId
    },
    collection_id :{
        type:mongoose.Schema.ObjectId
    }
   
})

module.exports = mongoose.model('collectionMember' , collectionMemberSchema)
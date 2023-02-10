const mongoose  = require('mongoose')


const organizationTypeSchema = new mongoose.Schema({

    // _id : {
    //     type:mongoose.Schema.ObjectId,
    //     },
    

    org_typeName : {
        type: String
        },
 
})

module.exports = mongoose.model('OrganizationType' , organizationTypeSchema)
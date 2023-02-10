const {  mongoose } = require('mongoose')

// const organizationType = require('../model/organizationTypeSchema')

const organizationSchema = new mongoose.Schema({

    org_id : {
        type: Number
        },
    org_name : {
        type: String
        },

    org_typeid : {
        type: mongoose.Schema.ObjectId, ref: 'OrganizationType'
        // type: mongoose.Schema.Types.ObjectId, ref: 'organizationType'
        },
    jurisdiction_id : {
        type:mongoose.Schema.ObjectId,
    },
    org_img : {
        type: String
    },
    firstName : {
        type: String
    },
    lastname : {
        type: String
    },
    email : {
        type: String
    },
    phone : {
        type: Number
    },
    address : {
        type: String
    },

    website : {
        type: String
    },
})

module.exports = mongoose.model('Organization' , organizationSchema)
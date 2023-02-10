const express = require('express')
const mongoose = require('mongoose')

const recordDataSchema = new mongoose.Schema({
    value:{
        type:String,
    },
    collectionrecord_id:{
        type:mongoose.Schema.ObjectId
    },
    datafield_id:{
        type:mongoose.Schema.ObjectId
    }
})

module.exports = mongoose.model('recordData' , recordDataSchema)
const express = require('express');
const mongoose = require('mongoose');

const collectionRecordSchema = new mongoose.Schema({
    isarchived : {
        type:Boolean,
    },
    deviceid : {
        type:Number,
    },
    collection_id : {
        type : mongoose.Schema.ObjectId
    } 
})

module.exports = mongoose.model("collectionRecord" , collectionRecordSchema)
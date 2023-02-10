const express = require('express');

 
const { createRecordData, getAllRecordData, getRecordData, deleteRecordData, updateRecordData } = require('../controller/recordDataController');
const RecordDataRouter  = express.Router();

//===>> Record Data route

RecordDataRouter.post('/add',createRecordData);         // Create Record Data
RecordDataRouter.get("/" , getAllRecordData);    // Get All Record Data
RecordDataRouter.get("/:id",getRecordData);      // Get one Record Data
RecordDataRouter.delete("/:id",deleteRecordData);        // Delete Record Data
RecordDataRouter.put("/:id",updateRecordData);           // Update Record Data

//===<<

module.exports = RecordDataRouter
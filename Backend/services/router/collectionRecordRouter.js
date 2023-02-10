const express = require('express');

const { creatCollectionRecord, getAllCollectionRecord, getCollectionRecord, deleteCollectionRecord, updateCollectionRecord } = require('../controller/collectionRecordController');
const CollectionRecordRouter  = express.Router();

//===>> Collection  Record route

CollectionRecordRouter.post('/add',creatCollectionRecord);         // Create Collection  Record
CollectionRecordRouter.get("/" , getAllCollectionRecord);    // Get All Collection  Record
CollectionRecordRouter.get("/:id",getCollectionRecord);      // Get one Collection  Record
CollectionRecordRouter.delete("/:id",deleteCollectionRecord);        // Delete Collection  Record
CollectionRecordRouter.put("/:id",updateCollectionRecord);           // Update Collection  Record

//===<<

module.exports = CollectionRecordRouter
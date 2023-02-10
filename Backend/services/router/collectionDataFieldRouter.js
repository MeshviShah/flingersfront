const express = require('express');
const { creatCollectionDatafield, getAllCollectionDatafield, getCollectionDatafield, deleteCollectionDatafield, updateCollectionDatafield } = require('../controller/collectionDataFieldController');
const CollectiondataFieldRouter  = express.Router();

//===>> CollectiondataField route

CollectiondataFieldRouter.post('/add',creatCollectionDatafield);         // Create CollectiondataField
CollectiondataFieldRouter.get("/" , getAllCollectionDatafield);    // Get All CollectiondataField
CollectiondataFieldRouter.get("/:id",getCollectionDatafield);      // Get one CollectiondataField
CollectiondataFieldRouter.delete("/:id",deleteCollectionDatafield);        // Delete CollectiondataField
CollectiondataFieldRouter.put("/:id",updateCollectionDatafield);           // Update CollectiondataField

//===<<

module.exports = CollectiondataFieldRouter
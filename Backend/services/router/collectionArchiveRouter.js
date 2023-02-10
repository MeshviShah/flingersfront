const express = require('express');

const { createCollectionArchive, getAllCollectionArchive, getCollectionArchive, deleteCollectionArchive, updateCollectionArchive } = require('../controller/collectionArchiveController');
const CollectionArchiveRouter  = express.Router();

//===>>Collection Archive route

CollectionArchiveRouter.post('/add',createCollectionArchive);         // Create Collection Archive
CollectionArchiveRouter.get("/" , getAllCollectionArchive);           // Get All Collection Archive
CollectionArchiveRouter.get("/:id",getCollectionArchive);              // Get one Collection Archive
CollectionArchiveRouter.delete("/:id",deleteCollectionArchive);        // Delete Collection Archive
CollectionArchiveRouter.put("/:id",updateCollectionArchive);           // Update Collection Archive

//===<<

module.exports = CollectionArchiveRouter
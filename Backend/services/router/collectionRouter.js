
const express = require('express')
const { creatCollection, getAllCollection, getCollection, deleteCollection, updateCollection } = require('../controller/collectionController')
const CollectionRouter = express.Router()

CollectionRouter.post('/add',creatCollection)
CollectionRouter.get("/" , getAllCollection);    // Get All Collection
CollectionRouter.get("/:id",getCollection);      // Get one Collection
CollectionRouter.delete("/:id",deleteCollection);        // Delete Collection
CollectionRouter.put("/:id",updateCollection);           // Update Collection

//===<<

module.exports = CollectionRouter
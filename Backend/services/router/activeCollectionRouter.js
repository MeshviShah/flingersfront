const express = require('express');
const { createActiveCollection, getAllActiveCollection, getActiveCollectionById, deleteActiveCollection, updateActiveCollection } = require('../controller/activeCollectionController');

const ActiveCollectionRouter  = express.Router();

//===>> Organization route

ActiveCollectionRouter.post('/add',createActiveCollection);         // Create Organization
ActiveCollectionRouter.get("/" , getAllActiveCollection);    // Get All Organization
ActiveCollectionRouter.get("/:id",getActiveCollectionById);      // Get one Organization
ActiveCollectionRouter.delete("/:id",deleteActiveCollection);        // Delete Organization
ActiveCollectionRouter.put("/:id",updateActiveCollection);           // Update Organization

//===<<

module.exports = ActiveCollectionRouter
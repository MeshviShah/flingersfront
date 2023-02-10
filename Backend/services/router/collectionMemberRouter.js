const express = require('express');

const { creatCollectionMember, getAllCollectionMember, getCollectionMember, deleteCollectionMember, updateCollectionMember } = require('../controller/collectionMemberController');
const CollectionMemberRouter  = express.Router();

//===>> CollectionMember route

CollectionMemberRouter.post('/add',creatCollectionMember);         // Create CollectionMember
CollectionMemberRouter.get("/" , getAllCollectionMember);    // Get All CollectionMember
CollectionMemberRouter.get("/:id",getCollectionMember);      // Get one CollectionMember
CollectionMemberRouter.delete("/:id",deleteCollectionMember);        // Delete CollectionMember
CollectionMemberRouter.put("/:id",updateCollectionMember);           // Update CollectionMember

//===<<

module.exports = CollectionMemberRouter
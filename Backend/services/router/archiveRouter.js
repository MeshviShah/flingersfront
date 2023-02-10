const express = require('express');
const { creatArchive, getAllArchive, getArchive, deleteArchive, updateArchive } = require('../controller/archiveController');
const ArchiveRouter  = express.Router();

//===>>Archive route

ArchiveRouter.post('/add',creatArchive);         // CreateArchive
ArchiveRouter.get("/" , getAllArchive);    // Get AllArchive
ArchiveRouter.get("/:id",getArchive);      // Get oneArchive
ArchiveRouter.delete("/:id",deleteArchive);        // DeleteArchive
ArchiveRouter.put("/:id",updateArchive);           // UpdateArchive

//===<<

module.exports = ArchiveRouter
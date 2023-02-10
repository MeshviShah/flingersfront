const express = require('express');
const { createPermissionMapping, getAllPermissionMapping, getPermissionMappingById, deletePermissionMapping, updatePermissionMapping } = require('../controller/permissionMappingController');
 
const PermissionMappingRouter  = express.Router();

//===>> Permission Mapping route

PermissionMappingRouter.post('/add',createPermissionMapping);         // Create Permission Mapping
PermissionMappingRouter.get("/" , getAllPermissionMapping);    // Get All Permission Mapping
PermissionMappingRouter.get("/:id",getPermissionMappingById);      // Get one Permission Mapping
PermissionMappingRouter.delete("/:id",deletePermissionMapping);        // Delete Permission Mapping
PermissionMappingRouter.put("/:id",updatePermissionMapping);           // Update Permission Mapping

//===<<

module.exports = PermissionMappingRouter
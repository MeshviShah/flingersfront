const express = require('express');
const { createPermission, getAllPermission, getPermissionById, deletePermission, updatePermission } = require('../controller/permissionController');


const PermissionRouter  = express.Router();

//===>> Permission route

 PermissionRouter.post('/add',createPermission);         // Create Permission 
 PermissionRouter.get("/" , getAllPermission);    // Get All Permission 
 PermissionRouter.get("/:id",getPermissionById);      // Get one Permission 
 PermissionRouter.delete("/:id",deletePermission);        // Delete Permission 
 PermissionRouter.put("/:id",updatePermission);           // Update Permission 

//===<<

module.exports =  PermissionRouter
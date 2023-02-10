const express = require('express');
const { createpermissionModule, getAllpermissionModule, getpermissionModule, deletepermissionModule, updatepermissionModule } = require('../controller/permissionModuleController');

const PermissionModuleRouter  = express.Router();

//===>> Permission Module route

PermissionModuleRouter.post('/add',createpermissionModule);         // Create Permission Module
PermissionModuleRouter.get("/" , getAllpermissionModule);    // Get All Permission Module
PermissionModuleRouter.get("/:id",getpermissionModule);      // Get one Permission Module
PermissionModuleRouter.delete("/:id",deletepermissionModule);        // Delete Permission Module
PermissionModuleRouter.put("/:id",updatepermissionModule);           // Update Permission Module

//===<<

module.exports = PermissionModuleRouter
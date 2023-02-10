const express = require('express');
const {  creatAdmin, getAllAdmin, getAdmin, deleteAdmin, updateAdmin } = require('../controller/adminUserController');
const AdminUserRouter  = express.Router();

//===>> Organization route

AdminUserRouter.post('/add',creatAdmin);         // Create Organization
AdminUserRouter.get("/" , getAllAdmin);    // Get All Organization
AdminUserRouter.get("/:id",getAdmin);      // Get one Organization
AdminUserRouter.delete("/:id",deleteAdmin);        // Delete Organization
AdminUserRouter.put("/:id",updateAdmin);           // Update Organization

//===<<

module.exports = AdminUserRouter
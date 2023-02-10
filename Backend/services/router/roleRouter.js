const express = require("express");

const { createRole, getAllRole, getRole, deleteRole, updateRole } = require("../controller/roleController");

const RoleRouter = express.Router();

//===>> Role route

RoleRouter.post('/add',createRole);         // Create Role
RoleRouter.get("/" , getAllRole);           // Get All Role
RoleRouter.get("/:id",getRole);             // Get one Role
RoleRouter.delete("/:id",deleteRole);       // Delete Role
RoleRouter.put("/:id",updateRole);          // Update Role

//===<<

module.exports = RoleRouter;

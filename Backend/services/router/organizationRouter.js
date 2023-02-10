
const express = require("express");
const { createOrganization, getAllOrganization, getOrganization, deleteOrganization, updateOrganization } = require("../controller/organizationController");

const OrganizationRouter = express.Router();

//===>> Organization route

OrganizationRouter.post('/add',createOrganization);         // Create Organization
OrganizationRouter.get("/" , getAllOrganization);    // Get All Organization
OrganizationRouter.get("/:id",getOrganization);      // Get one Organization
OrganizationRouter.delete("/:id",deleteOrganization);        // Delete Organization
OrganizationRouter.put("/:id",updateOrganization);           // Update Organization

//===<<

module.exports = OrganizationRouter;

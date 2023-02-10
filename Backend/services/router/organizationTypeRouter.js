
const express = require("express");

const { createOrganizationType, getAllOrganizationType, getOrganizationType, deleteOrganizationType, updateOrganizationType } = require("../controller/organizationTypeController");

const OrganizationTypeRouter = express.Router();

//===>> Organization route

OrganizationTypeRouter.post('/add',createOrganizationType);         // Create Organization
OrganizationTypeRouter.get("/" , getAllOrganizationType);    // Get All Organization
OrganizationTypeRouter.get("/:id",getOrganizationType);      // Get one Organization
OrganizationTypeRouter.delete("/:id",deleteOrganizationType);        // Delete Organization
OrganizationTypeRouter.put("/:id",updateOrganizationType);           // Update Organization

//===<<

module.exports = OrganizationTypeRouter;

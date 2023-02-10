
const express = require("express");
const { creatJurisdiction, getAllJurisdiction, getJurisdiction, deleteJurisdiction, updateJurisdiction } = require("../controller/jurisdictionController");


const JurisdictionRouter = express.Router();

//===>> Organization route

JurisdictionRouter.post('/add',creatJurisdiction);         // Create Organization
JurisdictionRouter.get("/" , getAllJurisdiction);    // Get All Organization
JurisdictionRouter.get("/:id",getJurisdiction);      // Get one Organization
JurisdictionRouter.delete("/:id",deleteJurisdiction);        // Delete Organization
JurisdictionRouter.put("/:id",updateJurisdiction);           // Update Organization

//===<<

module.exports = JurisdictionRouter;


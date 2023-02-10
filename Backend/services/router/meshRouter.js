const express = require("express");
const { createMesh } = require("../controller/meshController");



const MeshRouter = express.Router();

//===>> Role route

MeshRouter.post('/add',createMesh);         // Create Role

//===<<

module.exports = MeshRouter;

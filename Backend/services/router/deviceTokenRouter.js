const express = require('express');
const { createdeviceToken, getAlldeviceToken, getdeviceTokenById, deletedeviceToken, updatedeviceToken } = require('../controller/deviceTokenContoller');


const DeviceTokenRouter  = express.Router();

//===>> Device Token route

 DeviceTokenRouter.post('/add',createdeviceToken);         // Create Device Token
 DeviceTokenRouter.get("/" , getAlldeviceToken);    // Get All Device Token
 DeviceTokenRouter.get("/:id",getdeviceTokenById);      // Get one Device Token
 DeviceTokenRouter.delete("/:id",deletedeviceToken);        // Delete Device Token
 DeviceTokenRouter.put("/:id",updatedeviceToken);           // Update Device Token

//===<<

module.exports =  DeviceTokenRouter
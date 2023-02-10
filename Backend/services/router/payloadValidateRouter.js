const express = require('express');
const { createPayloadValidate, getAllPayloadValidate, getPayloadValidate, deletePayloadValidate, updatePayloadValidate } = require('../controller/payloadValidateController');

const PayloadValidateRouter  = express.Router();

//===>> Payload Validate route

PayloadValidateRouter.post('/add',createPayloadValidate);           // Create Payload Validate
PayloadValidateRouter.get("/" , getAllPayloadValidate);             // Get All Payload Validate
PayloadValidateRouter.get("/:id",getPayloadValidate);               // Get one Payload Validate
PayloadValidateRouter.delete("/:id",deletePayloadValidate);        // Delete Payload Validate
PayloadValidateRouter.put("/:id",updatePayloadValidate);           // Update Payload Validate

//===<<

module.exports = PayloadValidateRouter
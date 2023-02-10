const express = require('express');
const { createOption, getAllOption, getOptionById, deleteOption, updateOption } = require('../controller/optioncontroller');


const OptionRouter  = express.Router();

//===>> Optionroute

 OptionRouter.post('/add',createOption);         // Create Option
 OptionRouter.get("/" , getAllOption);    // Get All Option
 OptionRouter.get("/:id",getOptionById);      // Get one Option
 OptionRouter.delete("/:id",deleteOption);        // Delete Option
 OptionRouter.put("/:id",updateOption);           // Update Option

//===<<

module.exports =  OptionRouter
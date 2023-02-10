
const payloadValidateModel = require('../model/payloadValidateSchema');
const express = require('express');

exports.createPayloadValidate = async (req,res) => {
    
    try{
        const result = req.body;
        
        const data = await payloadValidateModel.create(result);
          return res.json({ data: data, status: "success" });   
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  };
  // Get All PayloadValidate
exports.getAllPayloadValidate = async(req,res) =>{
    try{
        const result = await payloadValidateModel.find()
        if(result.length >0){
          return res.json({ data: result, status: "success" });   
        }
        else{
          return res.send({message:"No Data Available"})
        }
       
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  }
  
  // Get PayloadValidate By Id
  exports.getPayloadValidate = async(req,res) => {
   
    try{
      const result = await payloadValidateModel.findById(req.params.id)
      if(result.length >0){
        return res.json({data:result, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  
  // Delete PayloadValidate
  exports.deletePayloadValidate = async(req,res) => {
    try{
      const result = await payloadValidateModel.findByIdAndDelete(req.params.id)
     
        return res.json({data:result, status: "success"})
     
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update PayloadValidate
  exports.updatePayloadValidate = async(req,res) => {
    try{
      const result = await payloadValidateModel.findByIdAndUpdate(req.params.id, req.body)
      
        return res.json({data:result, status: "updated successfully"})
      
    
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
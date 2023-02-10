
const permissionModuleModel = require('../model/permissionModuleSchema');
const express = require('express');

exports.createpermissionModule = async (req,res) => {
    
    try{
        const result = req.body;
        
        const data = await permissionModuleModel.create(result);
          return res.json({ data: data, status: "success" });   
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  };
  // Get All permissionModule
exports.getAllpermissionModule = async(req,res) =>{
    try{
        const result = await permissionModuleModel.find()
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
  
  // Get permissionModule By Id
  exports.getpermissionModule = async(req,res) => {
   
    try{
      const result = await permissionModuleModel.findById(req.params.id)
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
  
  // Delete permissionModule
  exports.deletepermissionModule = async(req,res) => {
    try{
      const result = await permissionModuleModel.findByIdAndDelete(req.params.id)
      
        return res.json({data:result, status: "success"})
     
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update permissionModule
  exports.updatepermissionModule = async(req,res) => {
    try{
      const result = await permissionModuleModel.findByIdAndUpdate(req.params.id, req.body)
     
        return res.json({data:result, status: "updated successfully"})
     
    
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
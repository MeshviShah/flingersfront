
const organizationTypeModel = require('../model/organizationTypeSchema');
const express = require('express');

exports.createOrganizationType = async (req,res) => {
    
    try{
        const result = req.body;
        console.log(result)
        const organizationType = await organizationTypeModel.create(result);
          return res.json({ data: organizationType, status: "success" });   
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  };
  // Get All organizationType
exports.getAllOrganizationType = async(req,res) =>{
    try{
        const organizationType = await organizationTypeModel.find()
        if(organizationType){
          return res.json({ data: organizationType, status: "success" });   
        }
        else{
          return res.send({message:"No Data Available"})
        }
       
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  }
  
  // Get organizationType By Id
  exports.getOrganizationType = async(req,res) => {
   
    try{
      const organization = await organizationTypeModel.findById(req.params.id)
      if(organization){
        return res.json({data:organization, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  
  // Delete organizationType
  exports.deleteOrganizationType = async(req,res) => {
    try{
      const organization = await organizationTypeModel.findByIdAndDelete(req.params.id)
      
        return res.json({data:organization, status: "success"})
     
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update organizationType
  exports.updateOrganizationType = async(req,res) => {
    try{
      const organization = await organizationTypeModel.findByIdAndUpdate(req.params.id, req.body)
     
        return res.json({data:organization, status: "updated successfully"})
      
    
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
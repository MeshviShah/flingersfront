const RoleModel =  require("../model/rolesSchema")
const express = require('express');
const { response } = require("express");


//creat Role
exports.createRole= async (req,res) =>{
   try{
       const result = req.body;
       const Role= await RoleModel.create(result);
        
        return res.json({data:Role, status: "success"})
           
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get Role

exports.getAllRole= async(req,res) =>{
   try{
       const Role= await RoleModel.find()
       if(Role.length >0){
        return res.json({data:Role, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }        
      
 
   }catch(error){
         return res.status(500).json({ error: error.message });
   }
 }
 
 // Get Role By Id
 exports.getRole= async(req,res) => {
     
   try{
     const Role= await RoleModel.findById(req.params.id)
     if(Role){
        return res.json({data:Role, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }      
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 
 // Delete Role
 exports.deleteRole= async(req,res) => {
   try{
     const Role= await RoleModel.findByIdAndDelete(req.params.id)
    
        return res.json({data:Role, status: "success"})
       
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update Role
 exports.updateRole= async(req,res) => {
   try{
     const Role= await RoleModel.findByIdAndUpdate(req.params.id, req.body)
    
        return res.json({data:Role, status: "success"})
          
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
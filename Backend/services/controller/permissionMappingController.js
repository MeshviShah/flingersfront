const express = require('express');
const permissionMappingModel = require('../model/permissionMappingSchema')
const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 
//creat Active Collection
exports.createPermissionMapping = async(req,res)  => {
    try{
        const result = req.body;
        const data = await permissionMappingModel.create(result)
       
             return res.json({data:data, status: "success"})
          
      }catch(error){
          return res.status(500).json({ error: error.message });
    }
    
}
// get all Active Collection
exports.getAllPermissionMapping =  async(req,res) =>{
    try{
      const result = await permissionMappingModel.aggregate([
       
        {
            $lookup : {
                from : "permissions",
                localField: "permission_id",
                foreignField:"_id",
                as:"permission_details"

            }
        },
        {
            $lookup:{
                from : "roles",
                localField: "role_id",
                foreignField:"_id",
                as:"role_details"
            }
        }
    ]) 
    if(result.length >0){
        return res.json({data:result, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }  
       
}catch(error){
    return res.status(500).json({ error: error.message });
}
  
}

//get Active Collection By ID

exports.getPermissionMappingById = async (req,res) => {
    try{
        const result = await permissionMappingModel.aggregate([
            {
                $match :{
                    _id:ObjectId(req.params.id)
                }
            },

            {
                $lookup : {
                    from : "permissions",
                    localField: "permission_id",
                    foreignField:"_id",
                    as:"permission_details"

                }
            },
            {
                $lookup:{
                    from : "roles",
                    localField: "role_id",
                    foreignField:"_id",
                    as:"role_details"
                }
            }
        ]) 
        if(result.length >0){
            return res.json({data:result, status: "success"})
          }
          else{
            return res.send({message:"No Data Available"})
          }  
           
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
   
}

 
 // Delete  PermissionMapping Record
 exports.deletePermissionMapping = async(req,res) => {
    try{
      const result = await permissionMappingModel.findByIdAndDelete(req.params.id)
     
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update  PermissionMapping Record
  exports.updatePermissionMapping = async(req,res) => {
    try{
      const result= await permissionMappingModel.findByIdAndUpdate(req.params.id, req.body)
     
         return res.json({data:result, status: "success"})
        
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
const express = require('express');
const permissionModel = require('../model/permissionSchema')
const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 
//creatPermission
exports.createPermission = async(req,res)  => {
    try{
        const result = req.body;
        const data = await permissionModel.create(result)
        
             return res.json({data:data, status: "success"})
           
      }catch(error){
          return res.status(500).json({ error: error.message });
    }
    
}
// get allPermission
exports.getAllPermission =  async(req,res) =>{
  try{
    const result = await permissionModel.aggregate([
       
        {
            $lookup:{
                from : "permissionmodules",
                localField: "permission_catid",
                foreignField:"_id",
                as:"permission_details"
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


//getPermission By ID

exports.getPermissionById = async (req,res) => {
    try{
        const result = await permissionModel.aggregate([
            {
                $match :{
                    _id:ObjectId(req.params.id)
                }
            },

            
            {
                $lookup:{
                    from : "permissionmodules",
                    localField: "permission_catid",
                    foreignField:"_id",
                    as:"permission_details"
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

 
 // Delete  Permission Record
 exports.deletePermission = async(req,res) => {
    try{
      const result = await permissionModel.findByIdAndDelete(req.params.id)
      
         return res.json({data:result, status: "success"})
     
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update  Permission Record
  exports.updatePermission = async(req,res) => {
    try{
      const result= await permissionModel.findByIdAndUpdate(req.params.id, req.body)
     
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
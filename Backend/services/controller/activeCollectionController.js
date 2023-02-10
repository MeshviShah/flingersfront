const express = require('express');
const activeCollectionModel = require('../model/activeCollectionSchema')
const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 
//creat Active Collection
exports.createActiveCollection = async(req,res)  => {
    try{
        const result = req.body;
        const data = await activeCollectionModel.create(result)
            return res.json({data:data, status: "success"})            
             
      }catch(error){
          return res.status(500).json({ error: error.message });
    }
    
}
// get all Active Collection
exports.getAllActiveCollection =  async(req,res) =>{
    try{
      const result = await activeCollectionModel.aggregate([
        
        {
            $lookup : {
                from : "collections",
                localField: "collection_id",
                foreignField:"_id",
                as:"collection_details"

            }
        },
        {
            $lookup:{
                from : "adminusers",
                localField: "user_id",
                foreignField:"_id",
                as:"admin_details"
            }
        }
    ]) 
        if(result.length > 0){
            return res.json({data:result,status:"success"})
        }
        else{
            return res.send({message:"No Data Available"})
          }  
    }catch(error){
        return res.status(500).json({ error: error.message });
  }
  
}

//get Active Collection By ID

exports.getActiveCollectionById = async (req,res) => {
    try{
        const result = await activeCollectionModel.aggregate([
            {
                $match :{
                    _id:ObjectId(req.params.id)
                }
            },

            {
                $lookup : {
                    from : "collections",
                    localField: "collection_id",
                    foreignField:"_id",
                    as:"collection_details"

                }
            },
            {
                $lookup:{
                    from : "adminusers",
                    localField: "user_id",
                    foreignField:"_id",
                    as:"admin_details"
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

 
 // Delete  ActiveCollection Record
 exports.deleteActiveCollection = async(req,res) => {
    try{
      const result = await activeCollectionModel.findByIdAndDelete(req.params.id)
      
         return res.json({data:result, status: "success"})
       
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update  ActiveCollection Record
  exports.updateActiveCollection = async(req,res) => {
    try{
      const result= await activeCollectionModel.findByIdAndUpdate(req.params.id, req.body)
     
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
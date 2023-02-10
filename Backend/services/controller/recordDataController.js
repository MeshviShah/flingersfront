const recordDataModel =  require("../model/recordDataSchema")
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


//creat adminUser
exports.createRecordData = async (req,res) =>{
   try{
       const result = req.body;
       const record = await recordDataModel.create(result);
     
            return res.json({ data: record, status: "success" });
      
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get adminuser

exports.getAllRecordData = async(req,res) =>{
  try{
    const result = await recordDataModel.aggregate([
  {
   
    $lookup: {
      from: "collectiondatafields",
      localField: "datafield_id",
      foreignField: "_id",
      as: "collectionData"
    }
  },
  {
   
    $lookup: {
      from: "collectionrecords",
      localField: "collectionrecord_id",
      foreignField: "_id",
      as: "collectionrecord"
    }
  },
  
])
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
 
 // Get organization By Id
 exports.getRecordData = async(req,res) => {
     
   try{
     const result = await recordDataModel.aggregate([
       {
         $match: {
           _id:ObjectId(req.params.id)
       }
       },
   {
    
     $lookup: {
       from: "collectiondatafields",
       localField: "datafield_id",
       foreignField: "_id",
       as: "collectionData"
     }
   },
   {
    
     $lookup: {
       from: "collectionrecords",
       localField: "collectionrecord_id",
       foreignField: "_id",
       as: "collectionrecord"
     }
   },
   
 ])
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
 
 // Delete organization
 exports.deleteRecordData = async(req,res) => {
   try{
     const record = await recordDataModel.findByIdAndDelete(req.params.id)
     
        return res.json({ data: record, status: "success" });
   
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update organization
 exports.updateRecordData = async(req,res) => {
   try{
     const record = await recordDataModel.findByIdAndUpdate(req.params.id, req.body)
    
        return res.json({ data: record, status: "success" });
   
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
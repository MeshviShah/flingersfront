const collectionRecord =  require("../model/collectionRecordSchema")
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


//creat Collection Record
exports.creatCollectionRecord = async (req,res) =>{
   try{
       const result = req.body;
       const admin = await collectionRecord.create(result);
       return res.json({ data: admin, status: "success" }); 
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get Collection Record

exports.getAllCollectionRecord = async(req,res) =>{
  try{
    const result = await collectionRecord.aggregate([
     
  {
   
    $lookup: {
      from: "collections",
      localField: "collection_id",
      foreignField: "_id",
      as: "collection"
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
 
 // Get  Collection Record By Id
 exports.getCollectionRecord = async(req,res) => {
     
   try{
     const result = await collectionRecord.aggregate([
       {
         $match: {
           _id:ObjectId(req.params.id)
       }
       },
   {
    
     $lookup: {
       from: "collections",
       localField: "collection_id",
       foreignField: "_id",
       as: "collection"
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
 
 // Delete  Collection Record
 exports.deleteCollectionRecord = async(req,res) => {
   try{
     const result = await collectionRecord.findByIdAndDelete(req.params.id)
     
        return res.json({data:result, status: "success"})
    
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update  Collection Record
 exports.updateCollectionRecord = async(req,res) => {
   try{
     const result= await collectionRecord.findByIdAndUpdate(req.params.id, req.body)
    
        return res.json({data:result, status: "success"})
     
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
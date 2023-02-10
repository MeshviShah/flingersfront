const collectionMember =  require("../model/collectionMemberSchema")
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


//creat memberUser
exports.creatCollectionMember = async (req,res) =>{
   try{
       const result = req.body;
       const member = await collectionMember.create(result);
       return res.json({ data: member, status: "success" }); 
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get memberuser

exports.getAllCollectionMember = async(req,res) =>{
  try{
    const result = await collectionMember.aggregate([
     
  {
   
    $lookup: {
      from: "collections",
      localField: "collection_id",
      foreignField: "_id",
      as: "collection"
    }
  },
  {
   
   $lookup: {
     from: "memberusers",
     localField: "user_id",
     foreignField: "_id",
     as: "memberuser"
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
 exports.getCollectionMember = async(req,res) => {
     
   try{
     const result = await collectionMember.aggregate([
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
   {
    
    $lookup: {
      from: "memberusers",
      localField: "user_id",
      foreignField: "_id",
      as: "memberuser"
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
 exports.deleteCollectionMember = async(req,res) => {
   try{
     const result = await collectionMember.findByIdAndDelete(req.params.id)
     
        return res.json({data:result, status: "success"})
    
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update organization
 exports.updateCollectionMember = async(req,res) => {
   try{
     const result= await collectionMember.findByIdAndUpdate(req.params.id, req.body)
    
        return res.json({data:result, status: "success"})
     
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
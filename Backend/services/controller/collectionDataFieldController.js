const collectionfieldModel =  require("../model/collectionDataFieldSchema")
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;


//creat adminUser
exports.creatCollectionDatafield = async (req,res) =>{
   try{
       const result = req.body;
       const admin = await collectionfieldModel.create(result);
       return res.json({ data: admin, status: "success" }); 
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get adminuser

exports.getAllCollectionDatafield = async(req,res) =>{
   try{
        const result = await collectionfieldModel.aggregate([
     
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
 
 // Get organization By Id
 exports.getCollectionDatafield = async(req,res) => {
     
   try{
     const result = await collectionfieldModel.aggregate([
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
 
 // Delete organization
 exports.deleteCollectionDatafield = async(req,res) => {
   try{
     const result = await collectionfieldModel.findByIdAndDelete(req.params.id)
     
        return res.json({data:result, status: "success"})
      
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update organization
 exports.updateCollectionDatafield = async(req,res) => {
   try{
     const result= await collectionfieldModel.findByIdAndUpdate(req.params.id, req.body)
    
        return res.json({data:result, status: "success"})
      
     
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
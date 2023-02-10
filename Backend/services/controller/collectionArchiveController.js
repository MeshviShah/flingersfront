const collectionArchiveModel = require('../model/collectionArchiveSchema');
//const collectionArchivetypes = require('../model/collectionArchiveTypeSchema');
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;



exports.createCollectionArchive = async (req,res) => {
    
    try{
        const result = req.body;
        // console.log(result)
        const collectionArchive = await collectionArchiveModel.create(result);
        
          return res.json({ data: collectionArchive, status: "success" });   
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  };
  // Get All collectionArchive
exports.getAllCollectionArchive = async(req,res) =>{
    try{
      const collectionArchive = await collectionArchiveModel.aggregate([
        
        {
         
          $lookup: {
            from: "archives",
            localField: "archive_id",
            foreignField: "_id",
            as: "Archive_detail"
          }
        },
        {
         
          $lookup: {
            from: "collectionrecords",
            localField: "collectionrecord_id",
            foreignField: "_id",
            as: "collection_record"
          }
        },
    
  ])
        if(collectionArchive.length >0){
          return res.json({data:collectionArchive, status: "success"})
        }
        else{
          return res.send({message:"No Data Available"})
        }  
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  }
  
  // Get collectionArchive By Id
  exports.getCollectionArchive = async(req,res) => {
        try{
          const collectionArchive = await collectionArchiveModel.aggregate([
            {
              $match: {
                _id:ObjectId(req.params.id)
            }
            },
        {
         
          $lookup: {
            from: "archives",
            localField: "archive_id",
            foreignField: "_id",
            as: "Archive_detail"
          }
        },
        {
         
          $lookup: {
            from: "collectionrecords",
            localField: "collectionrecord_id",
            foreignField: "_id",
            as: "collection_record"
          }
        },
        
      ])
      if(collectionArchive.length >0){
        return res.json({data:collectionArchive, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }     
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  
  // Delete collectionArchive
  exports.deleteCollectionArchive = async(req,res) => {
    try{
      const collectionArchive = await collectionArchiveModel.findByIdAndDelete(req.params.id)
      
        return res.json({data:collectionArchive, status: "success"})
     
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update collectionArchive
  exports.updateCollectionArchive = async(req,res) => {
    try{
      const collectionArchive = await collectionArchiveModel.findByIdAndUpdate(req.params.id, req.body)
      
        return res.json({data:collectionArchive, status: "success"})
     
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }







    
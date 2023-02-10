const express = require('express')
const CollectionModel = require("../model/collectionSchema");

//creat Collection
exports.creatCollection = async (req,res) => {
   try{
        const result = req.body;
        const collection = await CollectionModel.create(result);
            return res.json({ data: collection, status: "success" }); 
    }
      catch(error){
      return res.status(500).json({ error: error.message });
}
};


  
  // Get Collection By Id
  exports.getAllCollection = async(req,res) =>{
    try{
        const Collection = await CollectionModel.find()
        if(Collection >0){
          return res.json({ data: Collection, status: "success" });   
        }
        else{
          return res.send({message:"No Data Available"})
        }
       
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  }
  
  // Get Collection By Id
  exports.getCollection = async(req,res) => {
   
    try{
      const collection = await CollectionModel.findById(req.params.id)
      if(collection >0){
        return res.json({data:collection, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  
  // Delete Collection
  exports.deleteCollection = async(req,res) => {
    try{
      const collection = await CollectionModel.findByIdAndDelete(req.params.id)
     
        return res.json({data:collection, status: "success"})
   
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update Collection
  exports.updateCollection = async(req,res) => {
    try{
      const collection = await CollectionModel.findByIdAndUpdate(req.params.id, req.body)
      
        return res.json({data:collection, status: "updated successfully"})
      
      
    
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
const JurisdictionModel =  require("../model/jurisdictionSchema")
const express = require('express');
const { response } = require("express");


//creat jurisdiction
exports.creatJurisdiction= async (req,res) =>{
   try{
       const result = req.body;
       const jurisdiction= await JurisdictionModel.create(result);
      
        return res.json({data:jurisdiction, status: "success"})
   
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};

//get jurisdiction

exports.getAllJurisdiction= async(req,res) =>{
   try{
       const Jurisdiction= await JurisdictionModel.find()
       if(Jurisdiction){
        return res.json({data:Jurisdiction, status: "success"})
     }
     else{
      return res.send({message:"No Data Available"})
    } 
 
   }catch(error){
         return res.status(500).json({ error: error.message });
   }
 }
 
 // Get jurisdiction By Id
 exports.getJurisdiction= async(req,res) => {
     
   try{
     const Jurisdiction= await JurisdictionModel.findById(req.params.id)
     if(Jurisdiction){
      return res.json({data:Jurisdiction, status: "success"})
   }
   else{
    return res.send({message:"No Data Available"})
  } 
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 
 // Delete jurisdiction
 exports.deleteJurisdiction= async(req,res) => {
   try{
     const Jurisdiction= await JurisdictionModel.findByIdAndDelete(req.params.id)
     
      return res.json({data:Jurisdiction, status: "success"})
  
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
 //Update jurisdiction
 exports.updateJurisdiction= async(req,res) => {
   try{
     const Jurisdiction= await JurisdictionModel.findByIdAndUpdate(req.params.id, req.body)
     
        return res.json({data:Jurisdiction, status: "success"})
     
    
    
   }catch(error){
     return res.status(500).json({error : error.message});
   }
 }
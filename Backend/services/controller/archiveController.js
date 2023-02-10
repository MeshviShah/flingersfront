const express = require('express');
const ArchiveModel = require('../model/archiveSchema')
//creat archive
exports.creatArchive = async(req,res) => {
    try{
    const result = req.body;
    const archive = await ArchiveModel.create(result);
    return res.json({ data: archive, status: "success" }); 
    
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
}
// get all archive
exports.getAllArchive = async (req,res) =>{
    try{
        const result = await ArchiveModel.find()
        if(result){
            return res.json({ data: result, status: "success" });
        }
        else{
            return res.send({message:"No Data Available"})
          }  
       }catch(error){
         return res.status(500).json({error : error.message});
       }
}
//get archive by id
    exports.getArchive= async(req,res) => {
     
        try{
            const archive= await ArchiveModel.findById(req.params.id)
            if(archive){
                return res.json({data:archive, status: "success"})
            }
            else{
                return res.send({message:"No Data Available"})
            }      
         }catch(error){
                return res.status(500).json({error : error.message});
         }
  }

 // Delete  Archive Record
 exports.deleteArchive = async(req,res) => {
    try{
      const result = await ArchiveModel.findByIdAndDelete(req.params.id)
      
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  exports.updateArchive = async(req,res) => {
    try{
      const result= await ArchiveModel.findByIdAndUpdate(req.params.id, req.body)
     
         return res.json({data:result, status: "success"})
       
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
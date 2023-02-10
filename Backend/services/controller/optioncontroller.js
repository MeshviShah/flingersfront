const express = require('express');
const optionModel = require('../model/optionSchema')
const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 
//creat Active Collection
exports.createOption = async(req,res)  => {
    try{
        const result = req.body;
        const data = await optionModel.create(result)
       
             return res.json({data:data, status: "success"})
           
      }catch(error){
          return res.status(500).json({ error: error.message });
    }
    
}
// get all Active Collection
exports.getAllOption =  async(req,res) =>{
    try{
      const result = await optionModel.aggregate([
       

        {
            $lookup : {
                from : "collectiondatafields",
                localField: "datafield_id",
                foreignField:"_id",
                as:"collection_datafield"

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
    return res.status(500).json({ error: error.message });
}

}

//get Active Collection By ID

exports.getOptionById = async (req,res) => {
    try{
        const result = await optionModel.aggregate([
            {
                $match :{
                    _id:ObjectId(req.params.id)
                }
            },

            {
                $lookup : {
                    from : "collectiondatafields",
                    localField: "datafield_id",
                    foreignField:"_id",
                    as:"collection_datafield"

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
        return res.status(500).json({ error: error.message });
    }
   
}

 
 // Delete  option Record
 exports.deleteOption = async(req,res) => {
    try{
      const result = await optionModel.findByIdAndDelete(req.params.id)
      
         return res.json({data:result, status: "success"})
         
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update  option Record
  exports.updateOption = async(req,res) => {
    try{
      const result= await optionModel.findByIdAndUpdate(req.params.id, req.body)
     
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
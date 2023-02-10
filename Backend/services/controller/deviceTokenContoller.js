const express = require('express');
const deviceTokenModel = require('../model/deviceTokenSchema')
const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 
//creat Active Collection
exports.createdeviceToken = async(req,res)  => {
    try{
        const result = req.body;
        const data = await deviceTokenModel.create(result)
       
             return res.json({data:data, status: "success"})
           
      }catch(error){
          return res.status(500).json({ error: error.message });
    }
    
}
// get all Active Collection
exports.getAlldeviceToken =  async(req,res) =>{
  try{
    const result = await deviceTokenModel.aggregate([
       

        {
            $lookup : {
                from : "adminusers",
                localField: "user_id",
                foreignField:"_id",
                as:"adminuser_detail"

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

exports.getdeviceTokenById = async (req,res) => {
    try{
        const result = await deviceTokenModel.aggregate([
            {
                $match :{
                    _id:ObjectId(req.params.id)
                }
            },

            {
                $lookup : {
                    from : "adminusers",
                    localField: "user_id",
                    foreignField:"_id",
                    as:"adminuser_detail"

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

 
 // Delete  deviceToken Record
 exports.deletedeviceToken = async(req,res) => {
    try{
      const result = await deviceTokenModel.findByIdAndDelete(req.params.id)
     
         return res.json({data:result, status: "success"})
        
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update  deviceToken Record
  exports.updatedeviceToken = async(req,res) => {
    try{
      const result= await deviceTokenModel.findByIdAndUpdate(req.params.id, req.body)
      
         return res.json({data:result, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
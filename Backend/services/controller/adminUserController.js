 const adminUserModel =  require("../model/adminUserSchema")
 const crypto = require('crypto')
 const express = require('express');
 const mongoose = require('mongoose');
 const { ObjectId } = mongoose.Types;
 const bcrypt = require('bcrypt')
 var validator = require('validator');
 const validatePhoneNumber = require('validate-phone-number-node-js');
 //validator.isEmail('foo@bar.com');
 const dotenv = require('dotenv');
 dotenv.config();
 const saltRounds = parseInt(process.env.SALT)
//creat adminUser
 exports.creatAdmin = async (req,res) =>{
    try{

        if(await adminUserModel.findOne({email:req.body.email}) ){
          return res.send({message:"Email is already exsist"})

        }else{
        if(validator.isEmail(req.body.email) && validatePhoneNumber.validate(req.body.phone)){
          const salt = await bcrypt.genSalt(saltRounds);
          bcrypt.hash(req.body.password, salt, async (err, hash) => {
         req.body.password = hash;
         const result = req.body;
         const admin = await adminUserModel.create(result);
         return res.json({ data: admin, status: "success" }); 
         });
        }
        else{
          return res.status(500).json({ error: "enter correct email/phone" });
        }
       
    }
  }
      catch(error){
      return res.status(500).json({ error: error.message });
}
};

//get adminuser

exports.getAllAdmin = async(req,res) =>{
    try{
      const admin = await adminUserModel.aggregate([
        
    {
     
      $lookup: {
        from: "organizations",
        localField: "org_id",
        foreignField: "_id",
        as: "organization"
      }
    },
    {
     
      $lookup: {
        from: "roles",
        localField: "roleid",
        foreignField: "_id",
        as: "role"
      }
    },
    
  ])
        if(admin.length >0){
          return res.json({data:admin, status: "success"})
        }
        else{
          return res.send({message:"No Data Available"})
        }     
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  }
  
  // Get admin By Id
  exports.getAdmin = async(req,res) => {
      
    try{
      const admin = await adminUserModel.aggregate([
        {
          $match: {
            _id:ObjectId(req.params.id)
        }
        },
    {
     
      $lookup: {
        from: "organizations",
        localField: "org_id",
        foreignField: "_id",
        as: "organization"
      }
    },
    {
     
      $lookup: {
        from: "roles",
        localField: "roleid",
        foreignField: "_id",
        as: "role"
      }
    },
    
  ])
  if(admin.length >0){
    return res.json({data:admin, status: "success"})
  }
  else{
    return res.send({message:"No Data Available"})
  }     
}catch(error){
  return res.status(500).json({error : error.message});
}
}
  
  // Delete admin
  exports.deleteAdmin = async(req,res) => {
    try{
      const admin = await adminUserModel.findByIdAndDelete(req.params.id)
     
        return res.json({data:admin, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update admin
  exports.updateAdmin = async(req,res) => {
    try{
      const admin = await adminUserModel.findByIdAndUpdate(req.params.id, req.body)
      
        return res.json({data:admin, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  

const MeshModel =  require("../model/meshSchema")
const express = require('express');
const { response } = require("express");


//creat Role
exports.createMesh= async (req,res) =>{
   try{
       const result = req.body;
       const Role= await MeshModel.create(result);
        
        return res.json({data:Role, status: "success"})
           
   }
     catch(error){
     return res.status(500).json({ error: error.message });
}
};


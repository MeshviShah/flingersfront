const organizationModel = require('../model/organizationSchema');
//const organizationtypes = require('../model/organizationTypeSchema');
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;



exports.createOrganization = async (req,res) => {
    
    try{
        const result = req.body;
        // console.log(result)
        const organization = await organizationModel.create(result);
          return res.json({ data: organization, status: "success" });   
  
    }catch(error){
          return res.status(500).json({ error: error.message });
    }
  };
  // Get All organization
exports.getAllOrganization = async(req,res) =>{
  try{
    const organization = await organizationModel.aggregate([
     
  {
   
    $lookup: {
      from: "organizationtypes",
      localField: "org_typeid",
      foreignField: "_id",
      as: "organizationType"
    }
  },
  {
   
    $lookup: {
      from: "jurisdictions",
      localField: "jurisdiction_id",
      foreignField: "_id",
      as: "jurisdiction"
    }
  },
  
])
if(organization.length >0){
  return res.json({data:organization, status: "success"})
}
else{
  return res.send({message:"No Data Available"})
}     
}catch(error){
return res.status(500).json({error : error.message});
}
}
  
  // Get organization By Id
  exports.getOrganization = async(req,res) => {
        try{
          const organization = await organizationModel.aggregate([
            {
              $match: {
                _id:ObjectId(req.params.id)
            }
            },
        {
         
          $lookup: {
            from: "organizationtypes",
            localField: "org_typeid",
            foreignField: "_id",
            as: "organizationType"
          }
        },
        {
         
          $lookup: {
            from: "jurisdictions",
            localField: "jurisdiction_id",
            foreignField: "_id",
            as: "jurisdiction"
          }
        },
        
      ])
      if(organization.length >0){
        return res.json({data:organization, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }     
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  
  // Delete organization
  exports.deleteOrganization = async(req,res) => {
    try{
      const organization = await organizationModel.findByIdAndDelete(req.params.id)
      if(organization.length >0){
        return res.json({data:organization, status: "success"})
      }
      else{
        return res.send({message:"No Data Available"})
      }  
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
  //Update organization
  exports.updateOrganization = async(req,res) => {
    try{
      const organization = await organizationModel.findByIdAndUpdate(req.params.id, req.body)
      
        return res.json({data:organization, status: "success"})
      
    }catch(error){
      return res.status(500).json({error : error.message});
    }
  }
















    // {
        //   $project : {
        //     org_name :1,
        //     org_typeName : "$orgtype_idorg_typeName",
        //   }
        // },
       

      // ]).then(request => {
      //   res.send(request);
      // })
    //   ]) .then(response => {
    //     res.json({
    //         response
    //     })
    // })
    // .catch(error => {
    //     res.json({
    //       error : error.message
    //     })
    // })
//}
//     try{
//       const organization = await organizationModel.findById(req.params.id)
     
const bcrypt = require('bcrypt')
const AdminUserModel = require("../model/adminUserSchema")
var jwt = require("jsonwebtoken");


const secret = process.env.JWT_KEY;


//sign in
exports.signin = async(req,res) =>{ 
   try{

         const {password} = req.body;
         let user = await AdminUserModel.findOne({ email : req.body.email})
         if(!user) {
            return await res.send({message:"NO DATA AVAILABLE"})
         }
         const userData = {
            email : user.email,
            password:user.password,
            phone : user.phone
         }
      
         bcrypt.compare(password,user.password, (err,result) => {
            if(result){
               const token = jwt.sign({
                  email:user.email,
               },secret,{expiresIn: "1h"})
               return res.status(200).json({
                  data: userData,
                  token: token,
                  isAuthenticated: true,
                  message: "LOG IN",
                });
            }else{
               return res.status(401).json({
                  message: "Please Enter Correct Credential"
                });
            }
         })
   
    }
    catch(error){
    return res.status(500).json({error : error.message});
   }
}


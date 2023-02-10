const jwt = require('jsonwebtoken')
const secret = process.env.JWT_KEY;

const validation = async (req,res,next) => {

    try{
        if(!req.headers.authorization){
            await res.send("not authorized user")
        }
        const token = req.headers.authorization.substring(7);
        if(token){

        }else{
            
        }

    }catch(error) {

    }
}


module.exports = validation
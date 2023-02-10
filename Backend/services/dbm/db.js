const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery',false)       // true = remove other field which is not in schema 

const connection = new mongoose.connect(process.env.DATABASE_URI,{
    useNewUrlParser: true,       
        useUnifiedTopology: true,       // remove  connection option which is no longer 
        //autoIndex:false,             // not-allowing to creat auto indexing
        family: 4,                     // Use IPv4, skip trying IPv6 
})
.then(() => {
    console.log("connected")
})
.catch(error => {
    console.log("Cannot connect to the database!", error);
    process.exit();
})

module.exports = connection
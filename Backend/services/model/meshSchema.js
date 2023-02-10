const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const meshSchema = new mongoose.Schema( {
    name: {
        type: String,
        require: true
    },
    
},
{
    
    versionKey: false, // Here You have to add.
})

module.exports  = mongoose.model('mesh' ,  meshSchema)
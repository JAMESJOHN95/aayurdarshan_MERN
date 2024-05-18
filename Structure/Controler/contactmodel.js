const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    therapy:{
        type:String,
        require:true
    },
    Phone:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
})

const contacts = mongoose.model("contacts",contactSchema)
module.exports = contacts
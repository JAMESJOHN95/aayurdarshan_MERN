const mongoose = require('mongoose')


const treatmentSchemaema = new mongoose.Schema({
    therapy:
    {
        type: String,
        require: true
    },
    rate:
    {
        type: String,
        require: true
    },
    duration:
    {
        type: String,
        require: true
    },
    oils:
    {
        type: String,
        require: true
    },
    image:
    {
        type: String,
        require: true
    },
   
})

const treatments = mongoose.model("treatments",treatmentSchemaema)
module.exports = treatments
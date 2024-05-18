const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    therapy:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    date:{
        type: String,
        require: true
    },
    time:{
        type: String,
        require: true
    },
    therapist:{
        type: String,
        require: true
    }
})

const bookings = mongoose.model("bookings",bookingSchema)
module.exports = bookings
const bookings = require('./BookingModel')


exports.addbooking = async (req,res)=>{
    const {name,therapy,phone,date,time,therapist} = req.body
    console.log({name,therapy,phone,date,time,therapist});

    // const userId=req.payload
    try{
// const bookingstatusdate = await bookings.findone({date})
// const bookingstatustime = await bookings.findone({time})
// const bookingstatustherapist = await bookings.findone({therapist})

// if(bookingstatusdate && bookingstatustherapist && bookingstatustime){
//     res.status(406).json("We are having a booking at this time for this therapist...Sorry for your inconvenience please chose a another time or therapist. Thankyou!")
// }
    const newbooking = new bookings({
        name,therapy,phone,date,time,therapist
    })
    await newbooking.save();
    res.status(200).json(newbooking)

    }
    catch(err){
        res.status(401).json(err)
    }   
}

// getall reviews

exports.getallbookings = async(req,res)=>{
    try{
        const allbookings = await bookings.find()
        res.status(200).json(allbookings)

    }catch(err){
        res.status(401).json(err)
    }
}

// delete bookings

exports.removebooking = async (req,res)=>{
    console.log("inside remove reviews");
    const {pid}= req.params
    try{
        const bookingdetails = await bookings.findByIdAndDelete({_id:pid})
        res.status(200).json(bookingdetails)
    }catch(err){
        res.status(401).json(err)
    }
}
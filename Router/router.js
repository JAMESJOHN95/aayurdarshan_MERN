const express = require('express')
const router = new express.Router() // create new router
const usercontroller = require('../Structure/Controler/UserController')
const reviewcontroller = require('../Structure/Controler/ReviewController')
const treatmentcontroller = require('../Structure/Controler/treatmentsController')
const bookingcontroller = require('../Structure/Controler/BookingController')
const enquirycontroller = require('../Structure/Controler/contactcontroller')
const removereviewcontroller = require("../Structure/Controler/ReviewController")

// registering new user
router.post('/register',usercontroller.register)
// login
router.post('/login',usercontroller.Login)
// add reviews
router.post('/addreviews',reviewcontroller.addreviews)
//getall revoews
router.get('/getreviews',reviewcontroller.getallreviews)
// Add Treatment List
router.post('/treatments',treatmentcontroller.addtreatments)
//get all treatments
router.get('/treatments',treatmentcontroller.gettreatments)
// add a booking
router.post('/booking',bookingcontroller.addbooking)
// get bookings
router.get('/booking',bookingcontroller.getallbookings)
//deletebooking
router.delete('/delete-booking/:pid',bookingcontroller.removebooking)
//addenquiry
router.post('/enquiry',enquirycontroller.addenquiry)
// get all enquiry
router.get('/enquiry',enquirycontroller.getallenquiry)

//remove review
router.delete('/delete-review',removereviewcontroller.removereview)


module.exports = router // export router
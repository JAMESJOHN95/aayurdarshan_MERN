require ('dotenv').config() // import dotenv
const express = require('express') // import express
const cors = require('cors') // import cors
const Router = require('./Router/router')
require('./Db/Connection')


const aayurserver = express() // create expressserver


aayurserver.use(cors())   // use cord in server
aayurserver.use(express.json())  // middleware to convert json to js(express.json)
aayurserver.use(Router)

const PORT = 3000|| process.env.PORT  // set port at 3000


aayurserver.listen(PORT,()=>{
    console.log(`Aayur Server Started At ${PORT} `);  
})


aayurserver.get('/',(req,res)=>{
    res.status(200).send(`<h1>Ayurdarshan server started and waiting for client request<h1/>`)
})
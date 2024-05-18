const contacts = require('../Controler/contactmodel')

exports.addenquiry = async(req,res)=>{

    console.log("Control inside Enquiry");
    const {name,therapy,Phone,comment} = req.body
    try{
        const newenquiry = new contacts({
            name,therapy,Phone,comment
        })
        await newenquiry.save()
        res.status(200).json(newenquiry)

    }catch(err){
        res.status(401).json(err)
    }
}

// getall enquiry

exports.getallenquiry = async(req,res)=>{
    try{
        const allenquirys = await contacts.find()
        res.status(200).json(allenquirys)

    }catch(err){
        res.status(401).json(err)
    }
}
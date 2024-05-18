const reviews = require('../reviewmodels')

exports.addreviews = async(req,res)=>{

console.log("inside review request");
const {username,therapy,therapist,review,rating,replay} = req.body
// console.log(username,treatment,therapist,review,rating);
const userid = req.payload
try{
    const newreview = new reviews({
    username,therapy,therapist,review,rating,replay,userid
})
await newreview.save()
res.status(200).json(newreview)
}catch(err){
    res.status(401).json(err)
}   
}

// getall reviews

exports.getallreviews = async(req,res)=>{
    try{
        const allreviews = await reviews.find()
        res.status(200).json(allreviews)

    }catch(err){
        res.status(401).json(err)
    }
}

// delete review

exports.removereview = async (req,res)=>{
    console.log("inside remove reviews");
    const {pid}= req.params
    try{
        const reviewdetails = await reviews.findByIdAndDelete({_id:pid})
        res.status(200).json(reviewdetails)
    }catch(err){
        res.status(401).json(err)
    }
}
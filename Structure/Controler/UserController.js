const users = require('../Usermodel')
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
    console.log("control inside register");
    const { username, email, password ,role} = (req.body);
    console.log(username, email, password,role);
    try {
        const existinguser = await users.findOne({ email })
        if (existinguser) {
            res.status(406).json("User Already Exists")
        }
        const existingAdmin = await users.findOne({ role: 'admin' });
        if (role === 'admin' && existingAdmin) {
            return res.status(406).json("Admin Already Exists");
        }
        else {
            const newuser = new users({
                username, email, password, role
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}


// Login 

exports.Login = async(req,res)=>{
    console.log("inside login");
    const {email,password} = req.body
    console.log(email, password);
    
    // cheking if user exist at mongo db
    
    try{
        const existinguser = await users.findOne({email,password})
        if(existinguser){
            const token = jwt.sign({userId:existinguser._id},process.env.jwt_sectret)
            res.status(200).json({existinguser,token})
        }
        else{
    res.status(404).json("invalid email / password")
        }
    
    }catch(err){
        res.status(401).json(err)
    }
    }
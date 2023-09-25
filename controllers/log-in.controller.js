const User = require('../models/user');
const bcrypt = require('bcryptjs');


const logInUser = async(req,res,next)=>{
    const {email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email});
    }catch(err){
        console.error(err)
    }if(!existingUser){
        res.status(404)
        .json({message: "User was not found"})
    }
    const isCorrectPassword = bcrypt.compareSync(password, existingUser.password)
    if(!isCorrectPassword){
        return res.status(400).json({message: "Incorrect password!"})
    }
    return res.status(200).json({message: "Log In successful"})
}

module.exports = {logInUser}











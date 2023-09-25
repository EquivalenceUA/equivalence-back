const User = require('../models/user');
const bcrypt = require('bcryptjs')


const createUser = async (req, res, next)=>{
    const {username, email, password, agreed} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email}) && await User.findOne({username})
    }catch(err){
        console.error(err);
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists! Try logging in instead!"});
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({username, email, password:hashedPassword, agreed});

    try{
        user.save();
    }catch(err){
        console.error(err)
    }
    return res.status(201).json({user})
}

module.exports = {createUser};
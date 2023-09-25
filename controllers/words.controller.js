const Word = require('../models/word');


const getAllWords = async (req, res, next)=>{
    let existingWords;
    try {
        existingWords = await Word.find({})
    }catch{
        console.error(err)
    }
    return res.status(200).json({message: existingWords})
}

module.exports = {getAllWords}
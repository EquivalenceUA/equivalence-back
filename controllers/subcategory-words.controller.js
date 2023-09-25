const Word = require('../models/word');


const getAllSubcategoryWords = async (req, res, next) => {
  const { subcategory } = req.body;
  console.log({subcategory})
  try {
    const existingWords = await Word.find({ subCategory: subcategory });
    if (existingWords.length < 1) {
      return res.status(404).json({ message: "No such word in the database" });
    }
    return res.status(200).json({ words: existingWords });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
  
  module.exports = {getAllSubcategoryWords}
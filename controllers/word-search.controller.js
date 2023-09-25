const Word = require('../models/word');


const searchWord = async (req, res, next) => {
    const { word, lang } = req.body;
    let existingWords;
    let regex = new RegExp(`^${word}`, "ig");

    if(lang === 'eng'){
      try {
        existingWords = await Word.find({ engWord: regex });
        if (existingWords.length < 1) {
          return res.status(404).json({ message: "No such word in the database" });
        }
        return res.status(200).json({ words: existingWords });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
    }else if(lang === 'ua'){
      try {
        existingWords = await Word.find({ ukrWord: regex });
        if (existingWords.length < 1) {
          return res.status(404).json({ message: "No such word in the database" });
        }
        return res.status(200).json({ words: existingWords });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
  };

module.exports = {searchWord}
 
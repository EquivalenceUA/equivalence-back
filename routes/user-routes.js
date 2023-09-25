const express = require('express');
const {createUser} = require('../controllers/user.controller');
const {logInUser} = require('../controllers/log-in.controller');
const {searchWord} = require('../controllers/word-search.controller');
const {getAllWords} = require('../controllers/words.controller');
const {getAllSubcategoryWords} = require('../controllers/subcategory-words.controller');

const router = express.Router();

router.post("/sign-up", createUser);
router.post("/log-in", logInUser);
router.post("/word", searchWord);
router.get("/words", getAllWords);
router.post("/subcategory-words", getAllSubcategoryWords);


module.exports = router;
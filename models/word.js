const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wordSchema = new Schema({
    engWord:{
        type: String,
        required: true
    },
    ukrWord:{
        type: String,
        required: true
    },
    engDescriptions:{
        type: [String],
        required: false
    },
    ukrDescriptions:{
        type: [String],
        required: false
    },
    engExamples:{
        type: [String],
        required: false
    },
    ukrExamples:{
        type: [String],
        required: false
    },
    hashes:{
        type: [String],
        required: false
    },
    numberOfLikes:{
        type: Number,
        default: 0,
        required: false
    },
    isVerb:{
        type: Boolean,
        required: true,
        default: false
    },
    author:{
        type: String,
        required: true,
        default: "Ivanna Pukman"
    },
    subCategory:{
        type: String,
        required: true,
    }
});

const Word = mongoose.model('word', wordSchema);

module.exports = Word;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expSchema = new Schema({
    position: {
        type: String,
        required: false
    },
    institution: {
        type: String,
        required: false
    },
    role: {
        type: Array,
        required: false
    },
    year: {
        type: Number,
        required: false
    },
    color: {
        type: Array,
        default: false
    },
    size: {
        type: Number,
        default: false
    },
    tags: {
        type: Array,
        default: false
    }

})

const experience = mongoose.model('experience', expSchema);
module.exports = experience;
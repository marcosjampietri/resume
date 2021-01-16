const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sklSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    size: {
        type: Number,
        required: false
    },
    tags: {
        type: Array,
        default: false
    }

})
const skill = mongoose.model('skill', sklSchema);
module.exports = skill;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eduSchema = new Schema({
    type: {
        type: String,
        required: false
    },
    institution: {
        type: String,
        required: false
    },
    qualification: {
        type: String,
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
    tags: {
        type: Array,
        default: false
    }

})


const education = mongoose.model('education', eduSchema);
module.exports = education;
const mongoose = require('mongoose')



const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength:6,
    },
    body: {
        type: String,
        required: true,
        maxlength: 1000,
    },
    category: {
        type: [String],
        required: true,
    },
   
}, { timestamps: true });

module.exports = mongoose.model('Task', blogSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var postSchema = new Schema({
    place: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }},
    {
        timestamps: true,
        collection: 'posts'
    }
)

module.exports = mongoose.model('Post',postSchema);

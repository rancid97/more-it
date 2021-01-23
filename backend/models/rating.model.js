const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ratingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
},{
    timestamps: true
})

const RatingModel = mongoose.model('rating', ratingSchema)

module.exports = RatingModel

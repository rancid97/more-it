const mongoose = require('mongoose')

const Schema = mongoose.Schema

const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    list: {
        type: Array,
        required: true
    },

},
    {
        timestamps: true
    })

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service

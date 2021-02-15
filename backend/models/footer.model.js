const mongoose = require('mongoose')

const Schema = mongoose.Schema

const footerSchema = new Schema({
        id: {
          type: String,
          required: true
        },
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        address2: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        quote: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    })

const Footer = mongoose.model('Footer', footerSchema)

module.exports = Footer

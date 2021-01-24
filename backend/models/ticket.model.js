const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false,
        default: 'brak'
    },
    service: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    }
},{
    timestamps: true
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket

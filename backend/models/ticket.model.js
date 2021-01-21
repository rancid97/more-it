const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false,
        default: 'brak'
    },
    email: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
},{
    timestamps: true
})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket

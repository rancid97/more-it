const router = require('express').Router()
let Ticket = require('../models/ticket.model')

//weź wszystkie tickety
router.route('/').get((req,res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json('Error: ' + err))
})

//dodaj ticket
router.route('/add').post((req,res) => {
    const username = req.body.username
    const description = req.body.description
    const phone = req.body.phone
    const email = req.body.email
    const date = req.body.date
    const newTicket = new Ticket({username,description,phone,email,date})

    newTicket.save()
        .then(() => res.json('Ticket Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

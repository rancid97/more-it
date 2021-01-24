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
    const email = req.body.email
    const phone = req.body.phone
    const service = req.body.service
    const content = req.body.content
    const newTicket = new Ticket({username,email,phone,service,content})

    newTicket.save()
        .then(() => res.json('Ticket Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

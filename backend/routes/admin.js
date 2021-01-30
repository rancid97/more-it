const router = require('express').Router()
let Ticket = require('../models/ticket.model')

//admin login
router.route('/add').post((req,res) => {
    if(req.body.password === process.env.ADMIN_PASSWORD){
        Ticket.find()
            .then(tickets => res.json(tickets))
            .catch(err => res.status(400).json('Error: ' + err))
    } else res.send('bad password')
})

router.route('/delete').delete((req,res) => {
    Ticket.findByIdAndDelete(req.body.id, (err) => {
        if(err){
            res.send(err);
        } else {
            res.send(`ticket with id: ${req.body.id} has been removed from database`)
        }
    })
})

router.route('/update').post((req,res) => {
    Ticket.findOneAndUpdate({_id: req.body.id}, {isRead: true},{useFindAndModify: false,upsert: true, new: true}, (err) => {
        if(err){
            res.send(err)
        } else {
            res.send('works');
        }
    })
})
module.exports = router

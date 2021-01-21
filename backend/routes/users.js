const router = require('express').Router()
let User = require('../models/user.model')

//weź wszystkich użytkowników
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

//dodaj użytkownika
router.route('/add').post((req,res) => {
    const username = req.body.username
    const password = req.body.password
    const isAdmin = req.body.isAdmin
    const newUser = new User({username, password, isAdmin})

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

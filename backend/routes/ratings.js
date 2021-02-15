const router = require('express').Router()
let Rating = require('../models/rating.model')

//weź wszystkie oceny
router.route('/').get((req,res) => {
    Rating.find()
        .then(ratings => res.json(ratings))
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router

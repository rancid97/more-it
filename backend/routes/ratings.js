const router = require('express').Router()
let Rating = require('../models/rating.model')

//weź wszystkie oceny
router.route('/').get((req,res) => {
    Rating.find()
        .then(ratings => res.json(ratings))
        .catch(err => res.status(400).json('Error: ' + err))
})
//dodaj ocene
router.route('/add').post((req,res) => {
    const name = req.body.name
    const stars = req.body.stars
    const text = req.body.text
    const service = req.body.service
    const newRating = new Rating({name, stars, text, service})

    newRating.save()
        .then(() => res.json('Rating Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

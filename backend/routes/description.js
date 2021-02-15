const router = require('express').Router()
let Description = require('../models/description.model')


router.route('/').get((req,res) => {
    Description.findOne({id: 'description'})
        .then(description => res.json(description))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const id = req.body.id
    const header = req.body.header
    const description = req.body.description
    const newDescription = new Description({id,header,description})

    newDescription.save()
        .then(() => res.json('Description Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

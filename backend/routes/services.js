const router = require('express').Router()
let Service = require('../models/service.model')

router.route('/').get((req,res) => {
    Service.find()
        .then(services => res.json(services))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) => {
    const name = req.body.name
    const shortDescription = req.body.shortDescription
    const fullDescription = req.body.fullDescription
    const list = req.body.list
    const newService = new Service({name,shortDescription,fullDescription,list})

    newService.save()
        .then(() => res.json('Service Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

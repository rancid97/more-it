const router = require('express').Router()
let Footer = require('../models/footer.model')


router.route('/').get((req,res) => {
    Footer.findOne({id: 'footer'})
        .then(footer => res.json(footer))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const id = req.body.id
    const name = req.body.name
    const address = req.body.address
    const address2 = req.body.address2
    const phone = req.body.phone
    const email = req.body.email
    const quote = req.body.quote
    const newFooter = new Footer({id,name,address,address2,phone,email,quote})

    newFooter.save()
        .then(() => res.json('Footer Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

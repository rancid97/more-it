const router = require('express').Router()
let Ticket = require('../models/ticket.model')
let Admin = require('../models/admin.model')
let Service = require('../models/service.model')
let Rating = require('../models/rating.model')
let Footer = require('../models/footer.model')
let Description = require('../models/description.model')
const bcrypt = require('bcrypt')


//admin register
/*router.route('/register').post(async (req,res) => {
    const username = req.body.username
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const newAdmin = new Admin({username: username, password: hashedPassword})
    newAdmin.save()
        .then(() => res.json('Admin registered'))
        .catch(err => res.status(400).json('Error: ' + err))
})*/

//admin login
router.route('/login').post( async(req, res) => {
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Ticket.find()
                .then(tickets => res.json(tickets))
                .catch(err => res.status(400).json('Error: ' + err))
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

//Usuń tiket
router.route('/delete').delete((req,res) => {
    Ticket.findByIdAndDelete(req.body.id, (err) => {
        if(err){
            res.send(err);
        } else {
            res.send(`ticket with id: ${req.body.id} has been removed from database`)
        }
    })
})

//Odznacz ticket
router.route('/update').post((req,res) => {
    Ticket.findOneAndUpdate({_id: req.body.id}, {isRead: true},{useFindAndModify: false,upsert: true, new: true}, (err) => {
        if(err){
            res.send(err)
        } else {
            res.send('works');
        }
    })
})

//Zmień zawartość usługi
router.route('/update-info').post(async (req,res) => {
    let content = req.body.content
    const contentType = req.body.contentType
    if(contentType === 'list'){
        content = content.split(',')
    }
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Service.findOneAndUpdate({name: req.body.name}, {$set: {[contentType]: content}}, {useFindAndModify: false,upsert: true, new: true}, (err) => {
                if(err){
                    res.send(err)
                } else {
                    res.send('Zmieniono')
                }
            })
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

//Dodaj usługe
router.route('/service-add').post(async (req,res) => {
    const name = req.body.name
    const shortDescription = req.body.shortDescription
    const fullDescription = req.body.fullDescription
    const list = req.body.list
    const newService = new Service({name,shortDescription,fullDescription,list})

    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            newService.save()
                .then(() => res.json('Dodano usługę'))
                .catch(err => res.status(400).json('Error: ' + err))
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }

})

//Usuń usługe
router.route('/service-delete').post(async (req,res) => {
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Service.findOneAndDelete({name: req.body.name}, (err) => {
                if(err){
                    res.send(err);
                } else {
                    res.send(`Usługa : ${req.body.name} została usunięta z bazy danych`)
                }
            })
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

//Dodaj ocene
router.route('/rating-add').post(async (req,res) => {
    const name = req.body.name
    const stars = req.body.stars
    const text = req.body.text
    const service = req.body.service
    const newRating = new Rating({name, stars, text, service})

    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            await newRating.save()
                .then(() => res.json('Dodano ocenę'))
                .catch(err => res.status(400).json('Error: ' + err))
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

//Usuń ocene
router.route('/rating-delete').post(async (req,res) => {
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Rating.findOneAndDelete({name: req.body.name})
                .then(() => res.json('Usunięto ocenę'))
                .catch(err => res.status(400).json('Error: ' + err))
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

//Zmień opis
router.route('/update-description').post(async (req,res) => {
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Description.findOneAndUpdate({id: 'description'}, {$set: {header: req.body.header, description: req.body.description}}, {useFindAndModify: false,upsert: true, new: true}, (err) => {
                if(err){
                    res.send(err)
                } else {
                    res.send('Zmieniono opis')
                }
            })
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})
//Zmień stopke
router.route('/update-footer').post(async (req,res) => {
    try {
        const admin = await Admin.findOne({username: req.body.username}).exec()
        if(await bcrypt.compare(req.body.password, admin.password)){
            Footer.findOneAndUpdate({id: 'footer'}, {$set: {name: req.body.name, address: req.body.address, address2: req.body.address2, phone: req.body.phone, email: req.body.email, quote: req.body.quote}}, {useFindAndModify: false,upsert: true, new: true}, (err) => {
                if(err){
                    res.send(err)
                } else {
                    res.send('Zmieniono stopke')
                }
            })
        } else {
            res.status(401).send('failed login')
        }
    } catch {
        res.status(401).send('user does not exist')
    }
})

module.exports = router

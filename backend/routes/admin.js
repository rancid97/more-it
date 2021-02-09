const router = require('express').Router()
let Ticket = require('../models/ticket.model')
let Admin = require('../models/admin.model')
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

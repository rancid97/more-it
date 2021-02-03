const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require("path")



const app = express()
const port = process.env.PORT || 5000
const uri = process.env.ATLAS_URI

app.use(cors())
app.use(express.json())

mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

const ticketsRouter = require('./routes/tickets')
const usersRouter = require('./routes/users')
const ratingsRouter = require('./routes/ratings')
const serviceRouter = require('./routes/services')
const adminRouter = require('./routes/admin')

app.use('/tickets', ticketsRouter)
app.use('/users', usersRouter)
app.use('/ratings', ratingsRouter)
app.use('/services', serviceRouter)
app.use('/admin', adminRouter)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend')))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'))
    )
}
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})


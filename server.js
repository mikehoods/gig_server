const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const uri = process.env.MONGODB_URI
const PORT = process.env.PORT || 4000
const gigsController = require('./controllers/gigs.js')

app.use(cors());

mongoose.connect(uri, 
    {})
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("Error: ", err.message));

app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/gigs/', gigsController)

app.listen(PORT, () => {
    console.log(`You\'re listening on Port: ${PORT}`)
})

app.get('/', (req, res) => {
    res.redirect('/gigs')
})

app.use('/gigs', gigRoutes)
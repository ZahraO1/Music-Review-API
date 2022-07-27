// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const { Sequelize } = require('sequelize')

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Music Review API'
    })
})

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/comments', require('./controllers/comments_controller'))

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})


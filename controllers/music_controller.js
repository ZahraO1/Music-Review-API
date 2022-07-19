const router = require('express').Router()
//const db = require("../models")

//need to make Db
//const { Place, Comment, User } = db

router.get('/', async (req, res) => {
    //const places = await Place.findAll()
    //res.json(places)
    res.send("Hello World")
})

module.exports = router
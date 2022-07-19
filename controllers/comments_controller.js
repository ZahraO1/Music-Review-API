const router = require('express').Router()
const db = require("../models")

//need to make Db
const { Comment } = db

router.get('/', async (req, res) => {
    //const places = await Place.findAll()
    //res.json(places)

    res.send("Hello World")
})

//posting comments
router.post('/',async(req,res) =>{
    //posting the rating and decription and songname
    if(!req.body.message){
        req.body.message = ""
    }
    const comment = await Comment.create(req.body)
    res.json(comment)
})

//reading other comments

//updating comments

//deleting comments

module.exports = router
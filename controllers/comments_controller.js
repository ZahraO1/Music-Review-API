//Dependencies
const router = require('express').Router()
const db = require("../models");
const { Comment } = db
const{Op} = require('sequelize')

router.get('/', async (req, res) => {
    //const places = await Place.findAll()
    //res.json(places)

    res.send("Hello World")
})

//posting comments
router.post('/',async(req,res) =>{
    //posting the rating and decription and songname
    if(!req.body.comment){
        req.body.comment = ""
    }
    if(!req.body.user_name){
        req.body.user_name = "anonymous"
    }
    try {
        const newComment = await Comment.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new review',
            data: newComment
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//reading other comments

//updating comments

//deleting comments

module.exports = router
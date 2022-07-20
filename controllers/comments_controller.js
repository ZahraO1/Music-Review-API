//Dependencies
const router = require('express').Router()
const db = require("../models");
const { Comment } = db
const{Op} = require('sequelize')

//seeing all the comments
//should I sort them?
router.get('/', async (req, res) => {
    try{
        const foundComment = await Comment.findAll()
        res.status(200).json(foundComment)
    }catch(error){
        res.status(500).json(error)
    }
})

//posting comments
router.post('/',async(req,res) =>{
    //posting the rating and decription and songname
    if(!req.body.comment){
        req.body.comment = ""
    }
    if(!req.body.name){
        req.body.name = "Anonymous"
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

//updating comments

//deleting comments

module.exports = router
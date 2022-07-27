//Dependencies
const router = require('express').Router()
const db = require("../models");
const { Comment } = db
const {Op} = require('sequelize');

//seeing all the comments
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
    //posting the comment
    //if there is no comment, the default value is ""
    if(!req.body.comment){
        req.body.comment = ""
    }
    //if there's no name, the default name is "Anonymous"
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

//users can get specific comment using it's ID
router.get('/:id', async (req, res) => {
    try {
        const foundComment = await Comment.findOne({
            where: { 
                id: req.params.id
            }
        })
        res.status(200).json(foundComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

//updating comments
router.put('/:id', async (req, res) => {
    try {
        const updatedComment = await Comment.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedComment} comment(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//deleting comments
router.delete('/:id', async (req, res) => {
    try {
        const deletedComments = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedComments} comment(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = router
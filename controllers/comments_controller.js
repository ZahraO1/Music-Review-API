//Dependencies
const router = require('express').Router()
const db = require("../models");
const { Comment } = db
const{Op} = require('sequelize');
//const { timingSafeEqual } = require('crypto');

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

//finding specific comment, finding it by who post it
router.get('/:name', async (req, res) => {
    try {
        const foundComment = await Comment.findOne({
            where: { 
                name: {[Op.like]: `%${req.query.name ? req.query.name : ""}%`}
            }
        })
        res.status(200).json(foundComment)
    } catch (error) {
        res.status(500).json(error)
    }
})
//finding comment based on song name
router.get('/:song', async (req, res) => {
    try {
        const foundComment = await Comment.findOne({
            where: { 
                song_name: {[Op.like]: `%${req.query.song ? req.query.song : ""}%`}
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
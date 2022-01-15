const router = require('express').Router()
const { Post, User, Comments } = require('../models')
const passport = require('passport')

// GET all comment
router.get('/comments', passport.authenticate('jwt'), async function (req, res) {
  const commentData = await Comments.findAll({ include: [User, Post] })
  res.json(commentData)
})



// POST one comment
router.post('/comments', passport.authenticate('jwt'), async function (req, res) {
  const commentData = await Comments.create({
    body: req.body.body,
    pid: req.body.pid,
    uid: req.user.id
  })
  res.json(commentData)
})



module.exports = router
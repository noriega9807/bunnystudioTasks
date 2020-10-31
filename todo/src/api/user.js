const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send({ user })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/user/:id', async (req, res) => {
    const user = await User.findOne({ _id: req.params.id})
    res.send(user)
})

router.patch('/user/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findOne({ _id: req.params.id })

        if (!user) return res.status(404).send()
        updates.forEach((update) => user[update] = req.body[update])
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id
        await User.deleteOne({ _id })
        res.send({ message: `User deleted successfully` })
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/all', async (req, res) => {
    const users = await User.find({})
    res.send(users)
})

module.exports = router
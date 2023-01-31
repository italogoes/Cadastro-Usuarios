const express = require('express')
const router = express.Router()
const getUsers = require('../controllers/users')
const addUser = require('../controllers/users')
const updateUsers = require('../controllers/users')
const deleteUser = require('../controllers/users')

router.get('/', getUsers)
router.post('/', addUser)
router.put('/:id', updateUsers)
router.delete('/:id', deleteUser)

module.exports = router
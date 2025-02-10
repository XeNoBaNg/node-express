const express = require('express')
const router = express.Router()

const {
    person,
    createPerson,
    updatePerson,
    deletePerson
} = require('../controller/people')

router.get('/', person)

router.post('/postman', createPerson)

router.route('/postman/:id').put(updatePerson).delete(deletePerson)

module.exports = router
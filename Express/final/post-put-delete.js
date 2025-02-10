const express = require('express')
const app = express()
const people = require('./route/people')

app.use(express.json())

app.use('/api/people', people)

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000/api/people')
})
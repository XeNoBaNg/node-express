const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

app.use([logger, authorize])

app.get('/', (req,res) => {
    res.send('<h1>HOME PAGE</h1><p><a href="/about?user=john">About XeNo</a></p>')
})

app.get('/about', (req,res) => {
    res.send('<h1>XeNo©2025</h1><p><a href="/?user=john">Home</a></p>')
})

app.get('/api/items', (req,res) => {
    console.log(req.user)
    res.status(200).send('<h1>Items</h1>')
})

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
})

const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req,res) => {
    res.status(404).sendFile(path.resolve(__dirname, './navbar-app/404.html'))
})

app.listen(5000,() => {
    console.log('Server is running on http://localhost:5000')
})
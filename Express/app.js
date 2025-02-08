const http = require('http')
const { readFileSync } = require('fs')

const serverHomePage = readFileSync('./navbar-app/index.html')
const serverStyles = readFileSync('./navbar-app/styles.css')
const serverLogic = readFileSync('./navbar-app/browser-app.js')
const serverLogo = readFileSync('./navbar-app/logo.svg')

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(serverHomePage)
        res.end()
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>XeNo©2025</h1>')
        res.end()
    } else if (url === '/styles.css') {
        res.writeHead(200, { 'Content-Type': 'text/css' })
        res.write(serverStyles)
        res.end()
    } else if (url === '/logo.svg') {
        res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
        res.write(serverLogo)
        res.end()
    } else if (url === '/browser-app.js') {
        res.writeHead(200, { 'Content-Type': 'text/javascript' })
        res.write(serverLogic)
        res.end()
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('<h1>Get back to ur mother lil bro</h1><a href="/">SMASH ME</a>');
        res.end()
    }
})

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
})

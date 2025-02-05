const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end("Watchu lookin for lil bro?")
        return
    }
    if (req.url === '/about') {
        res.end("Official XeNo‘2025 page.")
        return
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
    <h1>WOMP WOMP NIGGA!</h1>
    <p>GET BACK TO UR MOTHER ---><a href="/">SMASH ME</a></p>
    `)
})

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000')
});

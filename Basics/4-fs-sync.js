const { log } = require('console')
const {readFileSync,writeFileSync, writeFile} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result.txt', `womp womp Nigga: ${first} ${second}`)

console.log(readFileSync('./content/result.txt', 'utf8'))

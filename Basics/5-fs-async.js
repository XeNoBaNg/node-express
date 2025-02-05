const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const first = data
    readFile('./content/second.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data
        writeFile('./content/result.txt', `Womp Womp Nigga, ${first} ${second}`, (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("FILE WRITTEN SUCESSFULLY!")
            readFile('./content/result.txt', 'utf8', (err, data) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log(data)
            })    
        })
    })
})

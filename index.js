const express = require("express")

const app = express()
app.get('/', (req, res) => {
    res.send('test..')
}).listen(process.env.PORT || 5000)

// const http = require('http')

// const proxy = http.createServer('/', (req, res) => {
//     res.end('test')
// })
// proxy.listen(5000, '127.0.0.1' ,() => console.log('server listening to.. '))
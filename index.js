const express = require("express")

const app = express()
app.get('/', (req, res) => {
    res.send('test')
}).listen(process.env.PORT || 5000)
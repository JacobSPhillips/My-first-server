const express = require('express');
const app = express();

app.use((req, res) => {
    console.log('we got a new request')
    res.send('hello, we got your request this is a response')
})

app.listen(3000, () => {
    console.log('listening on port 3000!')
})
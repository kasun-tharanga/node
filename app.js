const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('IT Works');
})

app.get('/new', (req, res)=>{
    res.send('New also Works');
})

app.get('/help', (req, res)=>{
    res.send('help page also Works');
})

app.listen(process.env.PORT || 5000);
module.exports = app;
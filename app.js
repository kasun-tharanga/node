const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    console.log('page loaded.');
    res.send('IT Works');
})

app.get('/new', (req, res)=>{
    console.log('new page loaded.');
    res.send('New also Works');
})

app.get('/help', (req, res)=>{
    console.log('help page loaded.');
    res.send('help page also Works');
})

app.listen(process.env.PORT || 5000);
module.exports = app;
const express = require('express');

const app = express();

app,set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Listening on port 3000.....')
});

app.get('/', (req, res) => {
    res.send('<h1>Mustyyyyyyy</h1>');
})

app.get('/about', (req, res) => {
    res.send('<h1>initttttttttttt</h1>');
})
const express = require('express');


const app = express();

app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Listening on port 3000.....')
});


app.get('/', (req, res) => {
    
    const blogs = [
        {title: 'Bernie', snippet: "The revolution"},
        {title: 'Jones', snippet: "The warrior"},

    ];

    res.render('index', {blogs: blogs});
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/blogs/create', (req, res) => {
    res.render('create')
})

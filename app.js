const express = require('express');
const morgan = require('morgan')
const app = express();


app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log('Listening on port 3000.....')
});

app.use(express.static('public'));
app.use(morgan('dev'));


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

app.use((req, res) => {
    res.status(404).render('404');
})



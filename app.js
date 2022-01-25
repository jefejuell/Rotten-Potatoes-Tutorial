const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
    //res.send('Hello World!');
    res.render('home', { msg: 'Handlebars are Cool!' });
})

app.get('/about', (req, res) => {
    res.send("This is a movie review website");
})
app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})
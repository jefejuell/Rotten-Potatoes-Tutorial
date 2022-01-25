const express = require('express');
const app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
    //res.send('Hello World!');
    //res.render('home', { msg: 'Handlebars are Cool!' });
    res.render('reviews-index', { reviews: reviews });
})

// app.get('/about', (req, res) => {
//     res.send("This is a movie review website");
// })

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

// OUR MOCK ARRAY OF PROJECTS
let reviews = [
    { title: "Great Review", movieTitle: "Batman II" },
    { title: "Awesome Movie", movieTitle: "Titanic" }
  ]
  
  // INDEX
//   app.get('/reviews', (req, res) => {
//     res.render('reviews-index', { reviews: reviews });
//   })
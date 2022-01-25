const express = require('express');
const { engine } = require('express-handlebars');
//https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
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
    { title: "Awesome Movie", movieTitle: "Titanic" },
    { title: "Pensive Thriller", movieTitle: "Shawshank Redemption"}
  ]
  
  // INDEX
//   app.get('/reviews', (req, res) => {
//     res.render('reviews-index', { reviews: reviews });
//   })
const express = require('express');
const { engine } = require('express-handlebars');
//https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String
  });

const app = express();

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// app.get('/', (req, res) => {
//     //res.send('Hello World!');
//     //res.render('home', { msg: 'Handlebars are Cool!' });
//     res.render('reviews-index', { reviews: reviews });
// })

// app.get('/about', (req, res) => {
//     res.send("This is a movie review website");
// })

app.listen(3000, () => {
    console.log('Server is listening on port 3000')
})

// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//     { title: "Great Review", movieTitle: "Batman II" },
//     { title: "Awesome Movie", movieTitle: "Titanic" },
//     { title: "Pensive Thriller", movieTitle: "Shawshank Redemption"}
//   ]
  
  // INDEX
  app.get('/', (req, res) => {
    Review.find()
        .then(reviews => {
           res.render('reviews-index', { reviews: reviews }); 
        })
        .catch(err => {
            console.log(err);
        })
    
  })
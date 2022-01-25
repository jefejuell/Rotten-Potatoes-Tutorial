const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
//https://stackoverflow.com/questions/69959820/typeerror-exphbs-is-not-a-function
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes', { useNewUrlParser: true });

const Review = mongoose.model('Review', {
    title: String,
    movieTitle: String,
    movieReview: String
  });

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

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

//NEW review form
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})

//CREATE
app.post('/reviews', (req, res) => {
    Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }) .catch((err) => {
        console.log(err.message);
    })
})

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
  

const path = require('path'); //Import the Path module
const express = require('express'); //import Express Js
const bodyParser = require('body-parser'); //import Body Parser

const app = express(); //This app happens to be a valid request handler

const users = [];

//Global configuration value

app.set('view engine', 'ejs'); //was pug before
app.set('views', 'views');

//import
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//Parsing the body of the second middleware, this parsing is first because it always has to execute
app.use(bodyParser.urlencoded({extended:false}));

//add css 
app.use(express.static(path.join(__dirname, 'public')));

//Consider or Export the routes folder files
app.use('/admin',adminData.routes); //Filtering Paths
app.use(shopRoutes);

//catch -all middleware (404 page not found)
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);
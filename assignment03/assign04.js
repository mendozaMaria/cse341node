const express = require('express'); //import Express Js
const bodyParser = require('body-parser'); //import Body Parser

const app = express(); //This app happens to be a valid request handler

const users = [];

//Register EJS as a view engine by setting a global view engine variable, or setting in our app
app.set('view engine', 'ejs');
app.set('views', 'views'); //Set views to the Views folder

//Register the body parser as a middleware. Parse incoming data 
app.use(bodyParser.urlencoded({ extended: false })); 

//ADDING ROUTES - We are going to have 2 routes, so we use 2 get() middleware
app.get('/', (req, res, next) => {
    //Render a view, a page which holds the form
    //Render the proper views
    res.render('index', {pageTitle: 'Add User'}); 
});

app.get('/users', (req, res, next) => {
    //Render the view where I output the entered usernames
    res.render('users', {
        pageTitle: 'User',
        //The first 'users. is the key by which I will be able to use users data in the template
        //The second 'users' is the array from above, which receive data from below.
        users: users, 
        hasUsers: users.length > 0
    });
});

app.post('/add-user', (req, res, next) =>{ //The route which is triggered when I submit the form
    //push new users onto the array, we need to use the value user enters in the form
    users.push({ name: req.body.username});
    res.redirect('/users'); //Where we can see the entered users
}) 

app.listen(4000);
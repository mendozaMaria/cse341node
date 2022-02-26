//Import dependencies
const express = require('express');
const bodyParser = require('body-parser');

//Import Routes
const professionalRoutes = require('./routes/professional');

//Create an express application using the express function
const app = express();

//Application/Json
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(8080); //Localhost
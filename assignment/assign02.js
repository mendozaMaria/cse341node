//import ExpressJS
const express = require('express');

//This is an object but also a Valid request handler
const app = express();

//Middleware
app.use('/page-one', (req, res, next) => {
    console.log('Page one middleware!');
    res.send('<h1>Hey! This is Page One!</h1>');
})

app.use('/', (req, res, next)=>{
    console.log('Page two middleware!');
    res.send('<h1>Now, this is Page Two!</h1>');
})

//Create a server - localhost
app.listen(4000);
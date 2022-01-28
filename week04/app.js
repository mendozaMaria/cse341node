const path = require('path');
const PATH = process.env.PORT || 5000;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('61f1eb4294e25b7bc7b794d7')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb://Lucia:Mongocluster@cluster0-shard-00-00.2rtxd.mongodb.net:27017,cluster0-shard-00-01.2rtxd.mongodb.net:27017,cluster0-shard-00-02.2rtxd.mongodb.net:27017/shop?ssl=true&replicaSet=atlas-ytq3a7-shard-0&authSource=admin&retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Lucia',
          email: 'lu098@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(PATH);
  })
  .catch(err => {
    console.log(err);
  });

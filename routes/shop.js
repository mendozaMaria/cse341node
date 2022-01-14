const path = require('path');

const express = require('express'); //import express

const rootDir = require('../util/path'); //Import root directory
const adminData = require('./admin');

const router = express.Router(); //router object

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router
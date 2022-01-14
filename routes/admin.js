const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router(); //function execute

const products = [];

// Se ingresa a /admin/add-product =>GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add product', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true
    }
    );
});

// Se ingresa a /admin/add-product =>POST
router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products =products;
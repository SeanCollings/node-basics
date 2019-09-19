const path = require('path');

const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const { products } = adminData;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
    // handlebars
    // hasProducts: products.length > 0,
    // activeShop: true,
    // productCSS: true
  });
});

module.exports = router;

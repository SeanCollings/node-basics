const Product = require('../models/product');

exports.getProducts = async (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // Product.fetchAll(products => {
  res.render('shop/product-list', {
    prods: await Product.fetchAll(),
    pageTitle: 'All Products',
    path: '/products'
    //== handlebars ==//
    /*hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true*/
  });
  // });
};

exports.getIndex = async (req, res, next) => {
  res.render('shop/index', {
    prods: await Product.fetchAll(),
    pageTitle: 'Shop',
    path: '/'
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your ORders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};

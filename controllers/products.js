const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  // Pug
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
    // handlebars
    // formsCSS: true,
    // productsCSS: true,
    // activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();

  res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  // Product.fetchAll(products => {
  res.render('shop', {
    prods: await Product.fetchAll(),
    pageTitle: 'Shop',
    path: '/'
    // handlebars
    // hasProducts: products.length > 0,
    // activeShop: true,
    // productCSS: true
  });
  // });
};

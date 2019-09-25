const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product'
    //== handlebars ==//
    /*formsCSS: true,
    productsCSS: true,
    activeAddProduct: true*/
  });
};

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = async (req, res, next) => {
  res.render('admin/products', {
    prods: await Product.fetchAll(),
    pageTitle: 'Admin Products',
    path: '/admin/products'
  });
};

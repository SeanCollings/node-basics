const fs = require('fs');
const path = require('path');

const rootPath = require('../util/path');
const p = path.join(rootPath, 'data', 'products.json');

const getProductsFromFile = async () => {
  const promise = new Promise(resolve => {
    fs.readFile(p, (err, fileContents) => {
      let products = [];
      if (!err) products = JSON.parse(fileContents);
      resolve(products);
    });
  });

  return await promise;
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  async save() {
    const products = await getProductsFromFile();
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), err => {
      console.log(err);
    });
  }

  static fetchAll() {
    return getProductsFromFile();
  }
};

const Products = require("../models/Products");

function ProductsService() {
  return {
    list: () => Products.find()
    // add: data => new Book(data).save(),
    // delete: id => Book.findByIdAndRemove(id)
  };
}

module.exports = ProductsService();
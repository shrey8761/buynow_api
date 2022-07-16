// const Products = require("../models/ProductsModel");
const ProductsDao = require("../dao/ProductsDao");

function ProductsService() {
  return {
    list: () => ProductsDao.find()
    // add: data => new Book(data).save(),
    // delete: id => Book.findByIdAndRemove(id)
  };
}

module.exports = ProductsService();


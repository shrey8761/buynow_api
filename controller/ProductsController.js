const Products = require("../services/ProductsService");
function ProductsController() {
  const listProducts = function(req, res) {
    Products.list().then(data => res.json(data));
  };

//   const addBooks = function(req, res) {
//     Products.add(req.body).then(data => res.json(data));
//   };

//   const deleteBooks = function(req, res) {
//     Products.delete(req.param.id).then(data => res.json(data));
//   };

  return {
    list: listProducts
    // add: addBooks,
    // delete: deleteBooks
  };
}

module.exports = ProductsController();
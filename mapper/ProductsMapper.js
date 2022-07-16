const Product = require('../models/ProductModel');

function ProductsMappers() {
    const MapProducts = function (rows) {
        let productsList = []
        for (i =0;i<rows.length;i++){
            let product = new Product()
            product.product_id = rows[i].product_id
            product.product_name = rows[i].product_name
            product.price = rows[i].price
            product.availabilty = rows[i].availabilty
            product.rating = rows[i].rating
            productsList.push(product)
            // console.log(product)
        }
        // console.log(productsList)
        return productsList
    };

    return {
        MapProducts: MapProducts,
    };
}

module.exports = ProductsMappers();
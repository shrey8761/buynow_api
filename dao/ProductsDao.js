// const Products = require("../models/ProductModel");
const pool = require("../db/DbConnection");
const ProductsMapper = require('../mapper/ProductsMapper');

function ProductsDao() {
    const find = function () {
        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM Products_table;',
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    resolve(ProductsMapper.MapProducts(results.rows))
                }
            );
        })
    };

    return {
        find: find,
    };
}
// let b = ProductsDao().find()
// console.log(b)
module.exports = ProductsDao();


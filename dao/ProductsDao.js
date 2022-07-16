const Products = require("../models/ProductModel");
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
        // add: addBooks,
        // delete: deleteBooks
    };
}
// let b = ProductsDao().find()
// console.log(b)
module.exports = ProductsDao();


// getLatestLanguages = function() {
//     return new Promise((resolve, reject) => {
//       pgPool.pool.query(
//         'SELECT * FROM "WordLanguage" ORDER BY id DESC LIMIT 30 ;',
//         (error, results) => {
//           if (error) {
//             reject(error);
//           }
//           resolve(results.rows);
//         }
//       );
//     });
//   };
const Product = class{
    // init(py) = constructor(js)
    constructor (product_id, product_name, price, availabilty, rating){
    this.product_id = product_id;
    this.product_name = product_name;
    this.price = price ;
    this.availabilty = availabilty;
    this.rating = rating
    }
}

module.exports = Product;
const {
    apiCat
} = require('./categories');
const {
    apiProduct
} = require('./products');
const {
    Product,
    Category
} = require('../db');

const allData = async () => {

    const prod = await Product.findAll()
    const cat = await Category.findAll()

    if (prod.length === 0) {
        await apiProduct();
    }
    if (cat.length === 0) {
        await apiCat();
    }

};

module.exports = {
    allData
}
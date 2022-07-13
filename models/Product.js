const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

})

// exports product model
const Product = mongoose.model('product', productSchema);

module.exports = Product;
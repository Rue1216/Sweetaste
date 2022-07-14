const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        value: ['special', 'hot', 'new'],
    },
    countInStock:{
        type: Number,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    }
})

// exports product model
const Product = mongoose.model('product', productSchema);

module.exports = Product;
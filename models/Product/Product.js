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
        value: ['本日精選', '人氣推薦', '新品上市'],
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
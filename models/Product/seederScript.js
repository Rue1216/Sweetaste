require('dotenv').config();

const productData = require('./data/products');
const connection = require('../../db');
const product = require('./Product');

// connect mongoDB
connection();

const importData = async () => {
    try {
        // import data
        await product.deleteMany({});
        await product.insertMany(productData);

        console.log('data import success');
        process.exit();
    } catch (error) {
        console.log(error);
        console.error('error with data import');
        process.exit(1);
    }
};

importData();
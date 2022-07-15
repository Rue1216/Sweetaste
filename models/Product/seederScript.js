require('dotenv').config();

// import products data
const special_productData = require('./data/special');
const hot_productData = require('./data/hot');
const new_productData = require('./data/new');

const connection = require('../../db');
const product = require('./Product');

// connect mongoDB
connection();

const importData = async () => {
    try {
        // import data
        await product.deleteMany({});
        await product.insertMany( special_productData );
        await product.insertMany( hot_productData );
        await product.insertMany( new_productData );

        console.log('data import success');
        process.exit();
    } catch (error) {
        console.log(error);
        console.error('error with data import');
        process.exit(1);
    }
};

importData();
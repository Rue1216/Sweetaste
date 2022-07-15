// import Schema
const Product = require('../models/Product/Product');

module.exports.allProducts_get = async (req,res)=>{
    try {
        const { category } = req.query;
        let products;
        if (category === "" | !category){
            products = await Product.find({});
        }
        else if (category === "本日精選"){
            products = await Product.find({ category: '本日精選'});
        }
        else if (category === "人氣推薦"){
            products = await Product.find({ category: '人氣推薦'});
        }
        else if (category === "新品上市"){
            products = await Product.find({ category: '新品上市'});
        }
        res.render('products/products',{
            products: products,
            searchOptions : req.query
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports.productsById_get = async (req,res)=>{
    try {
        // get products information from MongoDB
        const product = await Product.findById(req.params.id);
        res.json(product);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}


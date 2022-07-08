const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()


//views
const engine = require('ejs-locals');
app.engine('ejs', engine);
app.set("views", "./views"); //read the templates in "views"
app.set("view engine", "ejs");

//middlewares
//static files
app.use(express.static("public"));
app.use('/checkout', express.static('public'));

//parser
app.use(express.json());

// routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use(authRouter);
app.use('/cart',cartRouter);
app.use('/checkout',checkoutRouter);

// connect to mongoDB
mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('connected to database.'));


//listen to the port
let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log('server is running.'));
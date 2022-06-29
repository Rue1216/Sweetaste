const express = require('express');
const app = express();


//views
const engine = require('ejs-locals');
app.engine('ejs', engine);
app.set("views", "./views"); //read the templates in "views"
app.set("view engine", "ejs");

//static files
app.use(express.static("public"));
app.use('/checkout', express.static('public'));

// routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const loginRouter = require('./routes/login');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/login', loginRouter);
app.use('/cart',cartRouter);
app.use('/checkout',checkoutRouter);

//listen to the port
let port = process.env.PORT || 3000;
app.listen(port);
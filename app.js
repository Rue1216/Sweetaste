require('dotenv').config();

const express = require('express');
const app = express();
const connection = require('./db')
const cookieParser = require('cookie-parser');

// connect to mongoDB
connection();


//views
const engine = require('ejs-locals');
app.engine('ejs', engine);
app.set("views", "./views"); //read the templates in "views"
app.set("view engine", "ejs");

//middlewares
//static files
app.use(express.static("public"));
app.use('/checkout', express.static('public'));
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({extended:false}))

// routes
const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const checkoutRouter = require('./routes/checkout');
const { checkUser } = require('./middleware/authMiddleware');

app.get('*', checkUser);
app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use(authRouter);
app.use('/cart',cartRouter);
app.use('/checkout',checkoutRouter);

//404 pages 
app.use(function (req, res, next) {
    res.status(404).render('error');
})

//not getting the correct resources
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).render('serverErr');
})

//listen to the port
let port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));
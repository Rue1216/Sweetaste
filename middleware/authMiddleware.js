const jwt = require('jsonwebtoken');
const User = require('../models/User');

// to authenticate if the user has logged in
const requireAuth = (req, res, next) =>{
    const token = req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify( token,'secret for sweetaste', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('/login');
            }
            else{
                console.log(decodedToken);
                next();
            }
        })
    }
    else{
        // no jwt or not verified => redirect to login page
        res.redirect('/login');
    }
}

// check current user => get every user's info
// apply to every single route
const checkUser = (req, res, next) =>{
    const token = req.cookies.jwt; // obtain token
    //verify: have token or not
    if(token){
        jwt.verify( token,'secret for sweetaste', async (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else{
                // console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        })
    }
    else{
        // have no token => not logged in
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };
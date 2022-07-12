const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) =>{
    const token = req.cookies.jwt;

    //check json web token exists & is verified
    if(token){
        jwt.verify( token,'secret for sweetaste', (err, decodedToken)=>{
            if(err){
                console.log(err.message);
                res.redirect('login');
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

module.exports = { requireAuth };
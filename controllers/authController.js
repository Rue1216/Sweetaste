// import Schema
const User = require('../models/User');

//jwt
const jwt = require('jsonwebtoken');

const { stringify } = require('querystring')

// error handlers
const handleErrors = (err) =>{
    // err.message > output error messages set in User model
    // err.code > error type
    // console.log(err.message, err.code);
    let errors = { email: '', password: ''};

    // error code 11000 for duplicate registers
    if(err.code === 11000){
        errors.email = "此信箱已被使用";
        return errors;
    }

    //wrong email
    if(err.message === '電子信箱錯誤'){
        errors.email = '此信箱尚未註冊';
        return errors;
    }

    //wrong password
    if(err.message === '密碼錯誤'){
        errors.password = '輸入密碼錯誤';
        return errors;
    }

    // validation: return errors with properties & messages we set in the User model.
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach( ({ properties }) =>{
            errors[properties.path] = properties.message;
        })
    };

    return errors;
}

// create tokens
const maxAge = 3*24*60*60; // 3 days
const createToken = (id) =>{
    return jwt.sign({ id }, process.env.SECRET_KEY,{
        expiresIn: maxAge,
    })
}

// auth routes
module.exports.signup_get = (req,res)=>{ res.render('auth/signup') }
module.exports.login_get = (req,res)=>{ res.render('auth/login') }
module.exports.signup_post = async (req,res)=>{
    const { email, password } = req.body;
    
    try{
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge*1000 });
        res.status(201).json({user: user._id});

    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

module.exports.login_post = async (req,res)=>{
    const { email, password } = req.body;
    
    try{
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000});
        res.status(200).json({ user: user._id })
    }
    catch(err){
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
}

//forgot password
module.exports.forgot_get = (req,res)=>{ res.render('auth/forgot') }
module.exports.passwordReset_get = (req,res)=>{ res.render('auth/resetPassword') }
module.exports.forgot_post = async (req,res)=>{
    const { email } = req.body;
    try {
        const userEmail = await User.exists({ email });
        if(userEmail){
            res.send('user exists');
        }
        else{
            res.send('user not existed');
        }
        
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }
}

module.exports.passwordReset_post = (req,res)=>{
    // reset password
}

// logout users
module.exports.logout_get = (req,res)=>{
    // delete jwt cookie => replace with a blank cookie which expires quickly
    res.cookie('jwt', { maxAge: 1});
    // redirect to homepage
    res.redirect('/')
}
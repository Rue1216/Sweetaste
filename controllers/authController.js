module.exports.signup_get = (req,res)=>{
    res.render('auth/signup')
}
module.exports.login_get = (req,res)=>{
    res.render('auth/login')
}
module.exports.signup_post = (req,res)=>{
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    res.send('new signup')
}
module.exports.login_post = (req,res)=>{
    const { email, password } = req.body;
    console.log(email)
    console.log(password)
    res.send('user login')
}
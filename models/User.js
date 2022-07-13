const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, '請輸入電子信箱'],
        unique: true,
        lowercase: true,
        validate: [ isEmail, '請輸入有效的電子信箱']
    },
    password:{
        type: String,
        required: [true, '請輸入密碼'],
        minlength: [6, '請輸入至少六位英數字']
    }
})

// fire function before doc saved to db
userSchema.pre('save', async function(next){
    // console.log('user about to be created & saved.', this);
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

// fire function after doc saved to db
userSchema.post('save', function(doc, next){
    console.log('New user was created & saved.', doc);
    next();
})

// static method to login user
userSchema.statics.login = async function(email, password){
    const user = await this.findOne({ email });
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user
        }
        throw Error('密碼錯誤')
    }
    throw Error('電子信箱錯誤')
}

//exports user model
const User = mongoose.model('user', userSchema);

module.exports = User;
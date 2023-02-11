const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [8, 'Minimum length should be 8'],
        maxlength: [32, 'Maximum length of name should be 32']
    },
    email:{
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail,'Please enter a valid email address']
    },
    password:{
        type:String,
        required: true,
        minlength: [8, 'Minimum length should be 8'],
        maxlength: [16, 'Maximum length of password should be 32'],
        select:false
    },
    passwordConfirm:{
        type:String,
        required: true,
        validate : {
            validator: function(el){
                return el === this.password
            },
            message: 'Password is not matching'
        }
    },
    city: {
        type:String
    },
    country:{
        type:String
    },
    contact:{
        type:Number,
        length:[10,'Please enter 10 digit contact number']
    }
});

userSchema.pre('save', async function(next){
        // if(!this.isModified('password')) return next();
        this.password = await bcrypt.hash(this.password,12);
        this.passwordConfirm = null;
        next();
});

userSchema.methods.checkPassword = async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword); 
}



const User = mongoose.model('User',userSchema);

module.exports = User;


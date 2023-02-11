const User = require('./../models/userModel');
const fs = require('fs');
const { findOne } = require('./../models/userModel');

exports.signup = async (req,res)=>{
    try{
        const {email} = req.body;
        const currentUser = await User.findOne({email});
        if(!currentUser){
            
        const newUser = await User.create(req.body);
        
        return res.status(201).json({
            status:'Success',
            message:'User created successfully',
            data:{
                newUser
            }
        })
        }
        return res.status(404).json({
            status:'Failed',
            message:'User already exists!...'
        })

    }catch(err){
        return res.status(404).json({
            status:'Failed',
            message:'Cannot create the User!...',
            error:err
        })
    }
}

exports.login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(404).json({
                status:'Failed',
                message:'Please Enter Email and Password'
        })
    }
    const user = await User.findOne({email}).select('+password');
    if(!user || !user.checkPassword(password,user.password)){
        return res.status(404).json({
            status:'Failed',
            message:'Please enter correct email or password!...',
            error:err
        })
    } 
    res.status(201).json({
        status:'Success',
        message:'User successfully logged in!...',
        data:{
            user
        }
    })
    }catch(err){
        return res.status(404).json({
            status:'Failed',
            message:'Cannot login! There is some error.',
            error:err
        })
    }
}
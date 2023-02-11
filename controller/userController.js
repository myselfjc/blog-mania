const User = require('./../models/userModel');

exports.getAllUsers = async (req,res)=>{
    try{
        const users = await User.find();  
        if(users.length>0){
            return res.status(200).json({
                status:'Success',
                data:{
                    users
                }
            })
        }
        return res.status(404).json({
            status:'Failed',
            message:'cannot find any user!'
        })
        
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:'cannot get all users!'
        })
    }
}
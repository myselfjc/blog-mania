const Blog = require('./../models/blogModel');

exports.getAllBlogs = async (req,res)=>{
    try{
        const blogs = await Blog.find();
        if(blogs.length>0){
            return res.status(201).json({
                status:'Success',
                data:{
                    blogs
                }
            })
        }
        return res.status(404).json({
            status:'Failed',
            message:'There is NO Blog currently!'
        })
        
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:'Couldnt found any blogs!...'
        })
    }
}

exports.addBlogs = async (req,res)=>{
    try{
        const blog = await Blog.create(req.body);
        res.status(201).json({
            status:'Success',
            message:'Blog added successfully',
            data:{
                blog
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:'Couldnt add the blog!...'
        })
    }
}
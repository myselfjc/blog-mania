const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:[50,'Description should be of atleast 50 characters!']
    },
    user:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;
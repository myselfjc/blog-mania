const express = require('express');
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
app.use(express.json());
app.use((req,res,next)=>{
    // console.log(req.headers);
    next();
})

app.use('/users',userRoutes);
app.use('/blogs',blogRoutes);


module.exports = app;


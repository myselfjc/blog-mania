const app = require('./app')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: './config.env'});
mongoose.connect(process.env.DATABASE_LOCAL).then(()=>console.log('Databse connected successfully!...'))

const port = 8080;
app.listen(port,(req,res)=>{
    console.log(`Listening from the ${port}`);
})


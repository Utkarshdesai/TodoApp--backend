//import mongoose from mongoose
const mongoose = require('mongoose');

//import dburl from env 
require("dotenv").config()


//connect database with mongoose
const dbconnect = () => {

    mongoose.connect(process.env.DBurl,
    
    { 
        useNewUrlParser : true,
        useUnifiedTopology:true,
        
    })
    .then ( ()=> console.log("db connect sucessfully"))
    .catch((error)=>{
        console.log("issue in db");
        console.log(error.message);
        process.exit(1);
    })
}

//export it 
module.exports = dbconnect
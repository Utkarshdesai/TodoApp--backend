const express = require('express')

const app = express()

//import port from env file
require('dotenv').config()
const PORT = process.env.PORT || 4000

//connect database 
const connectdb = require('./config/dbconnect')
connectdb()

//use middleware to parse json data
// app.use(express.json())

//mount route
const todoroute = require ('./routes/todorouter')

app.use ('/api/v1' ,todoroute)



//server started on given PORT
app.listen(PORT ,(req,res)=>{
    console.log(`server is  started at ${PORT}`)
    
})


//default route 
app.get ('/' ,(req ,res) => {
    res.send (" welcome to homepage")
})
 

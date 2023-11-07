const mongoose =require('mongoose')

//create todo schema of following Properties
const todoschema = new mongoose.Schema (
    {
       title: {
          type : String ,
          maxlength : 20 ,
          required : true
       } ,

       description: {
        type : String,
        maxlength : 20 ,  
        required : true
     } , 

     createdAt : {
        type :Date ,
        required : true ,
        default : Date.now()
     },

      updatedAt : {
        type :Date ,
        required : true ,
        default : Date.now()
     },  

     }

)

module.exports =  mongoose.model ('createtodo' ,todoschema)
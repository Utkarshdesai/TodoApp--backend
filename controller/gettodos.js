const todo = require ("../models/todosmodel")

const gettodos = async (req ,res)=> 
{
     try {

        // get all todos in database
        const gettodo = await todo.find({})

        //send sucess response after getting all todos 
        res.status(200).json( {
            status :true ,
             message : "get all todos" ,
             data: gettodo,
        })
        
     } 
     catch (error) {

        console.log(error)
        res.status(500).json( 
            {
                status :false ,
                data : 'internal server error'  ,
                message : "data not found"
           }
        )
    
     }


} 

module.exports = gettodos
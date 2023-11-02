const todo = require('../models/todosmodel')

const gettodosbyid = async (req ,res) =>{
    try {

        //get id from user 
        const id = req.params.id

        //search object with given id from database 
        const gettodo = await todo.findById({_id:id})


        //not found any todos for given id 
        if(!todo) {
            res.status(200).json ({
                status :false,
                message : "not found todos "
                
            })
            
        }
 
       //data for given id is found 
        res.status(200).json ({
            status :true ,
            data :gettodo ,
            message : `todo for given ${id} is found`
            
        })
   
        
    } catch (error) {

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

module.exports = gettodosbyid
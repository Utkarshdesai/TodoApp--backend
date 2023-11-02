const todo = require('../models/todosmodel')

const updatetodo = async (req,res) => {
    try {

        //find id from databse to update todo
        const {id} = req.params

        //pass data that you want to update
        const {title ,description} = req.body ;

        //find todo by and update it 
        const updateTodo = await todo.findByIdAndUpdate(
            { _id : id} ,
            
            {title, description }
        
        )

        res.status(200).json({
            status :true ,
            data :updateTodo ,
            message : `todo for given ${id} is updated`
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

module.exports = updatetodo
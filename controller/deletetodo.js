const todo = require('../models/todosmodel')

const deletetodo = async (req,res) => {
    try {

    //find id from body
    const {id} = req.params
  
    //delete todo by id from database
    const deletetodo = await todo.findByIdAndDelete(id)

    //send response
    res.status(200).json({
        
            status :true ,
            message : `todo for given ${id} is deleted`
            
        
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

module.exports = deletetodo
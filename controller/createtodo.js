const todo = require ( '../models/todosmodel')

const createtodos = async (req ,res)=> {
   
    try {

        //extract data from user 
        const {title , description } = req.body ;

        //crate entry in database for above data
        const response = await todo.create ( {title , description});
        
        console.log(response)
        
        //send sucess respose  
        res.status(200).json ({
            status :true ,
            data :response ,
            message : "create entry in database sucessfully"
            
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

module.exports = createtodos
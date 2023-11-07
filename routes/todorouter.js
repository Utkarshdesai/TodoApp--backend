const express  = require("express") ;
const router = express.Router() ;

const createtodos = require ('../controller/createtodo')
const gettodos = require ('../controller/gettodos')
const getbyid = require ('../controller/gettodosbyid')
const updatebyid = require('../controller/updatetodo')
const deletebyid = require('../controller/deletetodo')


router.post('/createtodo' , createtodos) 
router.get('/gettodo' , gettodos)
router.get('/gettodo/:id' ,getbyid) 
router.put('/update/:id',updatebyid)
router.delete('/deletetodo/:id' ,deletebyid)

module.exports = router
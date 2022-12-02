const express = require("express")
const router = express.Router();


const users = [
    {
        name:"Farooq",
        lastName:"Ayub",
        Age:21
    },
    {
        name:"Ali",
        LastName:"Ahmed",
        Age:23
    }
]
router.get('/',(req,res)=>{
    res.send(users)
})

router.post('/',(req,res)=>{
    
})

module.exports =  router
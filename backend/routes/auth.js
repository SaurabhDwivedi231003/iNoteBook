const express =  require('express');
const User = require('../models/User');
const router = express.Router();

//Create a user using : POST "/api/auth/"  , dosen't require Auth


// using post request kuuki get me data url k sath jata h toh password ko khatra ho skta h.
router.post('/' , (req , res)=>{

    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);  
    
}) 

// Make sure actual MONGIDB SERVER started ho.
// Thunder client kholo aur wha body k andr kuch JSON likh k get ya post request maro according to code.
//  body ka example ye rha
//  {
//     "name" : "saurabh" , 
//     "email" : "email@email.com",
//     "password": "7878554"
//   }

//mongo compass me jana udhr jaake test naam k database me check krna aur jitne baar nayi GET/POST request krna utni baar reload Data krna.
// Udhr changes milege
module.exports = router 
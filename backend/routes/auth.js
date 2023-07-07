const express =  require('express');
const User = require('../models/User');
const router = express.Router();
const {body , validationResult } = require('express-validator');


//Create a user using : POST "/api/auth/"  , dosen't require Auth

// we're using Post request kuuki get me data url k sath jata h toh password ko khatra ho skta h.
router.post('/' ,
[                                                       //sara validation k points array k andar h dhyaan rkhna
    body('name' , "enter valid name").isLength({ min : 3 , max : 15}),  //mtlb naam km se km 3 words ka ho 
    body('email', "enter valid email").isEmail(),
    body('password' ," Password must be atleast of 5 character").isLength({min:5}), ] ,
   (req , res)=>{
  
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array()});
    }    
     
    // ye database me save hoga seedhe  
    User.create({
        name    : req.body.name ,
        password: req.body.password , 
        email   : req.body.email 
        }).then(user => res.json(user)).catch(err => console.log(err), res.json({error: 'Please enter a uniqu value for email' }))
        // jab bhi user duplicate duplicate naam ya email bgerh dalega usse ye error msg milega : Please enter a uniqu value for email
    
}) 

module.exports = router 




// ======================================NOTES=========================================================

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
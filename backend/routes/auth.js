const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var bcrypt = require('bcryptjs');   //for password hashing
var jwt = require('jsonwebtoken');   //for token generation


const JWT_SECRET = 'Saurabhisagood$oy';

// Create a user using : POST "/api/auth/createUser"  , dosen't require
// Auth/Login we're using Post request kuuki get me data url k sath jata h toh
// password ko khatra ho skta h.

//------------------Iss end-point se User Account bana payega--------------------------------------------------------------------

router.post(
  '/createUser',
  [
    // Validation rules are defined in an array
    body('name', 'Enter a valid name').isLength({ min: 3, max: 15 }), // Name should be between 3 and 15 characters
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are error Return Bad request along with the error
    const errors = validationResult(req);        // The validationResult function is used to check if there are any validation errors based on the defined rules
    
    if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }           

        //Inside try  Check whether a user with the same email already exists if not then create a new  
        try {
          let user = await User.findOne({ email: req.body.email });
          if (user) {
            return res.status(400).json({ error: 'A user with the same email already exists' });
          }
  
          //Using Salt from bcrypt.js dependency { check documentation }
          const salt = await bcrypt.genSaltSync(10);
          const secPass = await bcrypt.hash(req.body.password, salt);
          
          // Create a NEW USER and save it to the database ----------
          user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
          });
    
          // JwT auth k liye -------------
          const data = {
            user : { id : user.id }
          }
        const authtoken = jwt.sign(data , JWT_SECRET);
        res.json(authtoken);

      } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'some server error occured' });
    }
  }
  ); 


  //------------------Iss end-point se User Account pe login kr payega--------------------------------------------------------------------

  //Authenticate a user using : POST "api/auth/login" . No login required
  
  router.post( '/login', [         // login krte wqt apn user name nahi maag rhe
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),   //Mtlb password empty ni hone dega , error dene lg jyega
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }        

    // api request marte wqt email password ki spelling same rkhna
    const { email , password } = req.body;  //ye email , password uska h jo login krne ka try kr rha , ab hum isse match krege ki kya sahi h ya nahi.
    
    try{
         let user = await User.findOne({ email});   // same to fing existing user

         if(!user){  // Email check , agr email exist nahi krti toh ye msg dege
            return res.status(400).json({ error : "Please try to login with correct credentials"});
         }

         //Password comparison krege ki sahi h ya nahi
         const passwordCompare = await bcrypt.compare(password, user.password);

         if(!passwordCompare){   //if password not matched
          return res.status(400).json({ error : "Please try to login with correct credentials"});
         }
         const data = {
          user : { id : user.id }
        };
        const authtoken = jwt.sign(data , JWT_SECRET); // sign kiya fir neeche token bhj diya
        res.json({authtoken});

    }
    catch(error){
          console.error(error.message);
          res.status(500).send("Internal server error ");
    }

   });

module.exports = router

// ======================================NOTES=========================================================
// Make sure actual MONGIDB SERVER started ho. Thunder client kholo aur wha body
// k andr kuch JSON likh k get ya post request maro according to code.  body ka
// example ye rha  {     "name" : "saurabh" ,     "email" : "email@email.com",
// "password": "7878554"   } mongo compass me jana udhr jaake test naam k
// database me check krna aur jitne baar nayi GET/POST request krna utni baar
// reload Data krna. Udhr changes milege
// Id use krne se document retrieval fast ho jata h.
// JWS Token ki help se hum tempering hone se bachate h mtlb ek bar user apne account se login krle aur fir naam change krke wo naam daal le jo kisi existing user ka ho aur detail nikalne ki kosis kre toh hume pta chal jye
// Two dependency added : bcryptjs { salt k liye } , jwstoken {Tempering avoid krne k liye }
// 
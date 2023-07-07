const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a user using : POST "/api/auth/createUser"  , dosen't require
// Auth/Login we're using Post request kuuki get me data url k sath jata h toh
// password ko khatra ho skta h.

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
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }           

    // ye database me save hoga seedhe
    //Check whether user with same email exist already.

    try {
        // Check whether a user with the same email already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).json({ error: 'A user with the same email already exists' });
        }
  
        // Create a new user and save it to the database
        user = await User.create({
          name: req.body.name,
          password: req.body.password,
          email: req.body.email,
        });
    
        res.json(user); // Return the newly created user as JSON
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'some server error occured' });
    }
  }
);

module.exports = router

// ======================================NOTES=========================================================
// Make sure actual MONGIDB SERVER started ho. Thunder client kholo aur wha body
// k andr kuch JSON likh k get ya post request maro according to code.  body ka
// example ye rha  {     "name" : "saurabh" ,     "email" : "email@email.com",
// "password": "7878554"   } mongo compass me jana udhr jaake test naam k
// database me check krna aur jitne baar nayi GET/POST request krna utni baar
// reload Data krna. Udhr changes milege
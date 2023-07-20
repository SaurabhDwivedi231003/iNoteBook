const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require('../models/Note');
const {body, validationResult} = require('express-validator'); // check krege ki jo user ne note bnaya h usme kuch h ya nahi pta chake hum khali note database me save kiye jaa rhe.

// ROUTE 1 : Get all the notes using : GET "api/notes/fetchallnotes"

router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: 'some server error occured'});
    }

})

// ROUTE 2 : Add a New note using : POST "api/notes/addnote"

router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid name').isLength({min: 3}), // Name should be between 3 and 15 characters
    body('description', 'Description must be at least 5 characters long').isLength(
        {min: 5}
    )
], async (req, res) => { 

    try {
        const {title, description, tag} = req.body;

        //If there are error Return Bad request along with the error
        const errors = validationResult(req); // The validationResult function is used to check if there are any validation errors based on the defined rules

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()}); 
        }

        // Agr validation error nahi h toh note bna skte ho.
        const note = new Note({title, description, tag, user: req.user.id})

        const savedNote = await note.save(); // ye savedNote bna rhe taki notes ko save kr ske

        res.json(savedNote); // Calling saved notes
    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: 'some server error occured'});
    }
})

// ROUTE 3 : UPDATE an existing note using : PUT "api/notes/updatenote/:id"  {Thunder client ki API request me ":id" ki jgh actual id daalna }

router.put('/updatenote/:id', fetchuser,async (req, res) => { 
    const { title , description , tag } = req.body;  // ye user ko body se milega like jo apn thunder client me b dalte hain.

    // create a 'NewNote' object.
    const newNote = {};   // mtlb ki jo updated cheezen hain wo iss object k through hum further access krege , just we did in constructor actually they constructor.
    if(title){newNote.title = title};
    if(description){newNote.description = description}; 
    if(tag){newNote.tag = tag };

    //Find the note to be updated and then update it.
    let note = await Note.findById(req.params.id);  // ye wo id h jo update krna chahti h.
    if(!note){ res.status(404).send("Not Found !")}   // Maan lo ye note exist nahi krta tha kabhi issiliye Not Of note : "!note"

    //Ab phle confirm krege ki jiss note ko update krne ki bat kr rhe wo , ye bnda ussi account ka user h ya fraud.
    
    if(note.user.toString() !== req.user.id ){  // toString() uski id dega aur uske through request id se match krege aur agr match nahi hui toh status code with msg.
        return res.status(401).send("Not Allowed !");
    }

    // Ab maan wo user real user h.

    note = await Note.findByIdAndUpdate(req.params.id , {$set : newNote} ,{ new : true}); // indByIdAndUpdate() ek function ya method h jo following parameteres leta h aur update krta h
    res.json({note});
})

module.exports = router
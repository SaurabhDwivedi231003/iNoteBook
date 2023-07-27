import { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
  const notesInitial = [ 
    {
      "_id": "64bff4104f017abb76aa51a6",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My first Note ",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:10:56.895Z",
      "__v": 0
    },
    {
      "_id": "64bff495422410a884ea74ane0",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My first Note ",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:09.032Z",
      "__v": 0
    },
    {
      "_id": "64bff4a542241a0a884e74arhe2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0 
    },
    {
      "_id": "64bff4a542241a0a884e74are2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a542241a0a884e74afe2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a8a84e74age2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff4a5422410a8a84e74a1e2",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:13:25.418Z",
      "__v": 0
    },
    {
      "_id": "64bff58746bd849ea800f5218a",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note",
      "description": "SEEnU bhaiya programmer ban gye",
      "tag": "programmer",
      "date": "2023-07-25T16:17:11.279Z",
      "__v": 0
    },
    {
      "_id": "64bff58746bd849ea1800f528a",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": "My second Note ab",
      "description": "Saurabh the programmer ",
      "tag": "programmer",
      "date": "2023-07-25T16:17:11.279Z",
      "__v": 0
    }
  ];
  //eslint-disable-next-line
  const [notes, setNotes] = useState(notesInitial);

  // ADD a NOTE
  
  const addNote = ( title , description , tag) => {
        // To do API call
        console.log("Adding a new Note");
        const note ={
          "_id": "64bff58746bd849ea1800f528a",
          "user": "64bff013d165d1f9ffa2af2e",
          "title": title ,
          "description": description,
          "tag": tag,
          "date": "2023-07-25T16:17:11.279Z",
          "__v": 0
        } ;
        setNotes(notes.concat(note))
  }
  
  // DELETE a NOTE
  
  const deleteNote = (id) => {
            // To do API call

        console.log("Deleting the note with id " + id);
        const newNotes = notes.filter((notes)=>(notes._id!==id))
        setNotes(newNotes);

  }
  
  // EDIT a NOTE
  
  const editNote = ( id , title , description , tag) => {
    // API call 

  }


  return (
    <NoteContext.Provider value={{ notes , notesInitial , addNote , deleteNote , editNote}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

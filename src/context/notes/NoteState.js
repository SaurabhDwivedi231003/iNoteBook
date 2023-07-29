import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  
  const getNotes = async () => {
    // API Call 
      // eslint-disable-next-line 

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmYwMTNkMTY1ZDFmOWZmYTJhZjJlIn0sImlhdCI6MTY5MDMwMTQyMn0._NvHEg3VqXZkShfi8iBGNcqr3aet_knHRQewk6hB5RI" 
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmYwMTNkMTY1ZDFmOWZmYTJhZjJlIn0sImlhdCI6MTY5MDMwMTQyMn0._NvHEg3VqXZkShfi8iBGNcqr3aet_knHRQewk6hB5RI" 
      },
      body: JSON.stringify({title, description, tag})
    });
     

    console.log("Adding a new note")
    const note = {
      "_id": "64bff4104f017abb76aa51a6",
      "user": "64bff013d165d1f9ffa2af2e",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-25T16:10:56.895Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmYwMTNkMTY1ZDFmOWZmYTJhZjJlIn0sImlhdCI6MTY5MDMwMTQyMn0._NvHEg3VqXZkShfi8iBGNcqr3aet_knHRQewk6hB5RI" 
      }
    });
    const json = response.json();
    console.log(json);
    

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiZmYwMTNkMTY1ZDFmOWZmYTJhZjJlIn0sImlhdCI6MTY5MDMwMTQyMn0._NvHEg3VqXZkShfi8iBGNcqr3aet_knHRQewk6hB5RI" 
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
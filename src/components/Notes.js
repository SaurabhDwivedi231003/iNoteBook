import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import { AddNote } from './AddNote';

const Notes = () => { // Rename the component to NotesList
    
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  
  return (
    <>
      <AddNote />
      <div className="row my-3">   
        <h3>Your Notes</h3>
        {notes.map((note) => (
          <Noteitem key={note._id} note={note} />
        ))}
      </div>
    </>
  );
}

export default Notes; // Export the renamed component

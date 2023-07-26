import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem'

 const Notes = () => {
    const context = useContext(noteContext);
 const { notes } = context;
  return (
    <div>
         <div className="row my-3">   
         <h3> Your Notes</h3>
         { notes.map((notes)=> 
         {
            return <Noteitem note={notes}/>
         })}
    </div>
    </div>
  )
}


export default Notes
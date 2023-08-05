import React, {useContext, useEffect, useRef, useState} from 'react'
import noteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useHistory } from 'react-router-dom';

const Notes = (props) => {
    const context = useContext(noteContext);
    const {notes, getNotes, editNote} = context; // Add 'addNote' and 'updateNote'
    const [loading, setLoading] = useState(true);
    let history = useHistory();

       useEffect(() => {
           const fetchNotes = async () => {
               try {
                   if (localStorage.getItem('token')) {
                       await getNotes();
                       setLoading(false);
                   } else {
                       // Redirect to login page if there's no token
                       history.push("/login");
                   }
               } catch (error) {
                   console.error("Error fetching notes:", error);
                   setLoading(false);
               }
           };
           fetchNotes();
       }, [history, getNotes]);

    const ref = useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState( {id: "", etitle: "", edescription: "", etag: ""})

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
      }

    const handleClick = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Updated Successfully!" , "success");    }

    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value })
    }

    return (
        <> 
        < AddNote showAlert={props.showAlert} /> 
        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="my-3">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input  type="text"  className="form-control" placeholder="Enter Title minimun of 5 character"  id="etitle"  name="etitle"  value={note.etitle}  aria-describedby="emailHelp" minLength={5} required onChange={onChange}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input  type="text"  className="form-control" placeholder="Enter Title description of 5 character"  id="edescription"  name="edescription"  value={note.edescription}  onChange={onChange} minLength={5} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" placeholder="Enter tag" id="etag" name="etag" value={note.etag} onChange={onChange} minLength={5} required/>
                            </div>

                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="row my-3">
            <h2>Your Notes</h2>
            {/* <div className="container"> */}
            { loading ? (<p>Loading...</p>) : notes.length === 0 ? (<p>No notes to display</p>) : ( notes.map((note) => 
            <Noteitem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>))}
            {/* </div> */}

        </div>
    </>
    );
};

export default Notes;

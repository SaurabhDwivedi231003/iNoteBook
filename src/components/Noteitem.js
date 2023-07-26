import React from 'react'

const Noteitem = (props) => {

    const {note} = props;
    return (
        <div className='col-md-4'>
            <div className="card my-4">
                <div className="card-body">
                    <div className="d-flex align-item-center">
                    <h5 className="card-title">{note.title}</h5>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                    <i className="fa-solid fa-trash-can mx-2"></i>

                    </div>
                    
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem;
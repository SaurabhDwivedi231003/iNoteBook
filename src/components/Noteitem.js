import React from 'react'

const Noteitem = (props) => {

    const {note} = props;
    return (
        <div className='col-md-4'>
            <div class="card my-4">
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, veritatis?</p>
                </div>
            </div>
        </div>
    )
}

export default Noteitem;
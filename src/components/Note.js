import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function Note({ note, id }) {

    const { deleteNote } = useContext(GlobalContext);
    function onDelete() {
        deleteNote(id);
    }
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={onDelete}>DELETE</button>
        </div>
    )
}

export default Note

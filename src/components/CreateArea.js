import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function CreateArea() {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const { addNote } = useContext(GlobalContext);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function onAdd(event) {
        addNote(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content} />
                <button onClick={onAdd}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea

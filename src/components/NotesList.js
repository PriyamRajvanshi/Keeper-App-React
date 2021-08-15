import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import  Note  from './Note'

function NotesList() {
    const { notes } = useContext(GlobalContext);

    return (
        <>
            {notes.map((note, index) => {
                return <Note note={note} key={index} id ={index} />
            })}
        </>
    )
}

export default NotesList

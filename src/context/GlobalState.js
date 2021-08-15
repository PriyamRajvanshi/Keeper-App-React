import React, { useReducer, createContext } from "react"


const initialState = {
    notes: [
        //{title : "df", content: "sdf"}
    ]
}

export const GlobalContext = createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case "DELETE_NOTE":
            return {
                ...state, 
                notes : state.notes.filter((note, index) => index!== action.payload)
            }
        default:
            return state
    }
}
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function addNote(newNote) {
        dispatch({
            type: "ADD_NOTE",
            payload: newNote
        })
    }

    function deleteNote(id) {
        dispatch({
            type: "DELETE_NOTE", 
            payload: id
        })

    }

    return (<GlobalContext.Provider value={{
        notes: state.notes,
        addNote,
        deleteNote
    }}>
        {children}
    </GlobalContext.Provider>);
}

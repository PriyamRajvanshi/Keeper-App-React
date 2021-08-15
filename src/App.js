import React, { useContext } from 'react'
import CreateArea from './components/CreateArea';
import Footer from './components/Footer';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { GlobalProvider, GlobalContext } from './context/GlobalState';


function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <CreateArea />
        <NotesList/>
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;

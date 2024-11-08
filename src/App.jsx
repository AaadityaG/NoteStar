import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NotesForm from './components/NotesForm';
import NotesForm from './components/NoteForm';
import NotesList from './components/NotesList';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notesform" element={<NotesForm />} />
          <Route path="/notes" element={<NotesList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

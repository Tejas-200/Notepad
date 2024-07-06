import React, { useState } from 'react';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import  TopBar from './title';
import Name from './name';
import Count from './noteCount'
import './noteCount.css';
import './App.css'
import LineCanvas from './Line';

interface Note {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id: number, newText: string) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
  };

  return (
    <div className="App">
      <TopBar />
      <Name />
      <Count count = {notes.length}/>
      <LineCanvas />
      <NoteEditor addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} />
    </div>
  );
}

export default App;

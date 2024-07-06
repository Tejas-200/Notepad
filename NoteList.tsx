import React from 'react';
import Note from './Note';

interface Note {
  id: number;
  text: string;
}

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: number) => void;
  editNote: (id: number, newText: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote, editNote }) => {
  return (
    <div>
      {notes.map(note => (
        <Note
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
    </div>
  );
};

export default NoteList;

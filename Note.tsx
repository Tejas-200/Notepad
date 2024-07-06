import React, { useState } from 'react';

interface Note {
  id: number;
  text: string;
}

interface NoteProps {
  note: Note;
  deleteNote: (id: number) => void;
  editNote: (id: number, newText: string) => void;
}

const Note: React.FC<NoteProps> = ({ note, deleteNote, editNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editNote(note.id, text);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{note.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteNote(note.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Note;

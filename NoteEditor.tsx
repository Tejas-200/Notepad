import React, { useState } from 'react';

interface NoteEditorProps {
  addNote: (text: string) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ addNote }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note here..."
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteEditor;

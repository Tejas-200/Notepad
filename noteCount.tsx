import React from 'react';
import './noteCount.css';

interface NoteCounterProps {
  count: number;
}

const Count: React.FC<NoteCounterProps> = ({ count }) => {
  return (
    <div className="note-counter">
      Number of notes: {count}
    </div>
  );
};

export default Count;
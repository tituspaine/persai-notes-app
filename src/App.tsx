import React, { useState } from 'react';

export default function App() {
  const [notes, setNotes] = useState<{id: number, text: string}[]>([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { id: Date.now(), text: input }]);
      setInput('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6 border-b border-slate-700 pb-2">PERSAI Notes</h1>
        <div className="flex gap-2 mb-8">
          <input 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            className="flex-1 bg-slate-800 border border-slate-700 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a note..."
          />
          <button onClick={addNote} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-bold transition">Add</button>
        </div>
        <ul className="space-y-3">
          {notes.map(note => (
            <li key={note.id} className="bg-slate-800 p-4 rounded border border-slate-700">{note.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
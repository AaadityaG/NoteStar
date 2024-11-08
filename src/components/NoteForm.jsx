import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NotesForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = { id: Date.now(), title, description };
    existingNotes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(existingNotes));
    setTitle('');
    setDescription('');
    navigate('/notes');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6">Create a New Note</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none transition-shadow"
          required
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NotesForm;

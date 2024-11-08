import React, { useState, useEffect } from 'react';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleEdit = (id) => {
    const newTitle = prompt('Edit title:');
    const newDescription = prompt('Edit description:');
    if (newTitle && newDescription) {
      const updatedNotes = notes.map((note) =>
        note.id === id ? { ...note, title: newTitle, description: newDescription } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">My Notes</h2>
      {notes.length === 0 ? (
        <p className="text-gray-500 italic">No notes available. Start by adding some!</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.id}
              className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{note.title}</h3>
              <p className="text-gray-700 mb-4">{note.description}</p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => handleEdit(note.id)}
                  className="bg-yellow-400 text-white py-1 px-3 rounded-lg shadow-sm hover:bg-yellow-500 transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(note.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-sm hover:bg-red-600 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NotesList;

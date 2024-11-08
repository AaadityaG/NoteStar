import React, { useState, useEffect } from 'react';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentNote, setCurrentNote] = useState({ title: '', description: '', id: '' });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const handleEdit = (note) => {
    setCurrentNote(note);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentNote({ title: '', description: '', id: '' }); // Reset current note
  };

  const handleSave = () => {
    if (currentNote.title && currentNote.description) {
      const updatedNotes = notes.map((note) =>
        note.id === currentNote.id ? { ...note, title: currentNote.title, description: currentNote.description } : note
      );
      setNotes(updatedNotes);
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
      handleModalClose(); // Close modal after saving
    } else {
      alert('Both title and description are required.');
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
                  onClick={() => handleEdit(note)}
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

      {/* Modal Popup for Editing */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-semibold mb-4">Edit Note</h3>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                id="title"
                value={currentNote.title}
                onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description"
                value={currentNote.description}
                onChange={(e) => setCurrentNote({ ...currentNote, description: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Save
              </button>
              <button
                onClick={handleModalClose}
                className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NotesList;

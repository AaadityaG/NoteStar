import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to the Notes App</h1>
        <p className="text-gray-600 mb-6">Create, view, and manage your notes effortlessly.</p>
        <button
          onClick={() => navigate('/notesform')}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
        >
          Go to Notes Form
        </button>
      </div>
    </div>
  );
}

export default Home;

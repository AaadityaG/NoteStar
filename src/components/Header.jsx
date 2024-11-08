import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-16 justify-between items-center px-6 shadow-md bg-gradient-to-r from-blue-500 to-purple-600">
      <button
        onClick={() => navigate('/')}
        className="text-white font-semibold py-2 px-4 rounded-lg hover:bg-opacity-80 transition-colors duration-200 italic bg-gradient-to-r from-blue-500 to-purple-600"
      >
        NoteStar
      </button>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/notes')}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition-transform duration-200 transform hover:scale-105"
        >
          Notes List
        </button>
        <button
          onClick={() => navigate('/notesform')}
          className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-100 transition-transform duration-200 transform hover:scale-105"
        >
          Notes Form
        </button>
      </div>
    </div>
  );
};

export default Header;

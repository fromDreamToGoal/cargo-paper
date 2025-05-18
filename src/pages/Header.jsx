import React from 'react';

export default function Header({ onMenuClick, onExit }) {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white shadow">
      <button
        onClick={onMenuClick}
        className="w-12 h-12 flex flex-col justify-center items-center bg-gray-200 border border-black shadow hover:bg-gray-300 transition"
      >
        <span className="block w-8 h-0.5 bg-black mb-2"></span>
        <span className="block w-8 h-0.5 bg-black mb-2"></span>
        <span className="block w-8 h-0.5 bg-black"></span>
      </button>
      <h1 className="text-4xl font-light text-center flex-1">CargoPaper</h1>
      <button
        onClick={onExit}
        className="bg-gray-200 px-6 py-2 ml-4 rounded-sm text-lg hover:bg-gray-300 transition"
      >
        Exit
      </button>
    </header>
  );
}
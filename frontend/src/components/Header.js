import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">One-Stop Business Registration Solution</h1>
        <nav>
          <a href="#registration" className="mr-4">Register</a>
          <a href="#documents" className="mr-4">Documents</a>
          <a href="#tutorials" className="mr-4">Tutorials</a>
          <a href="#chatbot">Chatbot</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
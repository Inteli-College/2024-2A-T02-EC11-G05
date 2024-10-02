import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo à esquerda */}
        <div className="flex items-center">
          <img
            src="/home/gabriel/2024-2A-T02-EC11-G05/src/frontend/carbon-check/src/assets/ABH Black@2x 4.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        {/* Navegação ou outras opções à direita */}
        <nav className="flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-black">Home</a>
          <a href="/about" className="text-gray-600 hover:text-black">Sobre</a>
          <a href="/contact" className="text-gray-600 hover:text-black">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// src/components/Navbar.tsx
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white">Logo</div>
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col sm:flex-row gap-4">
          <li><a href="#home" className="text-white">Home</a></li>
          <li><a href="#about" className="text-white">About</a></li>
          <li><a href="#products" className="text-white">Products</a></li>
          <li><a href="#contact" className="text-white">Contact</a></li>
        </ul>
      </div>
      <button className="sm:hidden text-white" onClick={handleMenuToggle}>
        Menu
      </button>
    </nav>
  );
};

export default Navbar;

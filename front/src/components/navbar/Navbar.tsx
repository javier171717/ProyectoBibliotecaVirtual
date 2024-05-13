"use client"
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    console.log("Clic en el ícono del carrito");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    
  };

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  return (
    <nav className="flex flex-col items-center justify-between px-10 py-4 bg-blue-500">
      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/">
          <Image src="/images/Logo.png" alt="Logo" width={80} height={80} className="cursor-pointer" />
        </Link>
       
        {isLoggedIn ? (
          <div className="flex items-center">
            <span className="text-white mr-4">¡Hola, usuario!</span>
            <button onClick={handleLogout} className="text-white mr-4">Cerrar Sesión</button>
          </div>
        ) : (
          <div className="flex items-center">
            <a href="http://localhost:3000/login" className="text-white mr-4">Login</a>
            <a href="http://localhost:3000/register" className="text-white">Registrate</a>
          </div>
        )}
        <button className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="max-w-md flex-1 p-2 mr-4 rounded-md focus:outline-none"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 h-6 w-6" />
        </button>
        <div className="block md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faBars : faBars} />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row justify-center items-center md:w-full transition-transform duration-300 md:transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <a href="http://localhost:3000" className="text-black mb-2 md:mb-0 md:mr-4">Productos</a>
        <a href="http://localhost:3000/landing" className="text-black mb-2 md:mb-0 md:mr-4">Ofertas Especiales</a>
        <a href="http://localhost:3000/contacto" className="text-black mb-2 md:mb-0 md:mr-4">Cont@cto</a>
        <a href="http://localhost:3000/orders" className="text-black mb-2 md:mb-0 md:mr-4">Ordenes</a>
        <a href="http://localhost:3000/dashboard" className="text-black mb-2 md:mb-0 md:mr-4">Mi cuenta</a>
      </div>

      <div className="cursor-pointer text-black text-2xl" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(''); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      const parsedUserData = JSON.parse(userData);
      setIsLoggedIn(true);
      setUsername(parsedUserData.user.name); 
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    console.log("Clic en el ícono del carrito");
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('orders');
    localStorage.removeItem('cartProducts');
    
    setIsLoggedIn(false);
    setUsername(''); // Limpiar el nombre del usuario
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex flex-col items-center justify-between px-10 py-2 bg-blue-500">
      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/">
        <Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="cursor-pointer rounded-full" />
        </Link>
       
        {isLoggedIn ? (
          <div className="flex items-center">
            <span className="text-white mr-4">
              ¡Hola, <span style={{ color: 'orange' }}>{username}</span>!
            </span>
            <button onClick={handleLogout} className="text-white mr-4">Cerrar Sesión</button>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="/login" className="text-white mr-4">Login</Link>
            <Link href="/register" className="text-white">Registrate</Link>
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
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      <div className={`flex flex-col md:flex-row justify-center items-center md:w-full transition-transform duration-300 md:transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link href="/" className="text-black mb-2 md:mb-0 md:mr-4">Productos</Link>
        <Link href="/landing" className="text-black mb-2 md:mb-0 md:mr-4">Ofertas Especiales</Link>
        <Link href="/contacto" className="text-black mb-2 md:mb-0 md:mr-4">Cont@cto</Link>
        <Link href="/orders" className="text-black mb-2 md:mb-0 md:mr-4">Ordenes</Link>
        <Link href="/dashboard" className="text-black mb-2 md:mb-0 md:mr-4">Mi Cuenta</Link>
      </div>

      <div className="cursor-pointer text-black text-2xl" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="flex items-center">  
        </div> 
      </div>
    </nav>
  );
};



export default Navbar;









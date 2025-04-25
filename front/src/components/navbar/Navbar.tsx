"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Swal from 'sweetalert2';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('orders');
    localStorage.removeItem('cartProducts');
    setIsLoggedIn(false);
    setUsername('');
  };

  // Mapeo de géneros y sus URLs
  const searchRedirects: Record<string, string> = {
    magia: 'https://booknet.com/es/genre/magia',
    fantasia: 'https://booknet.com/es/genre/fantasia',
    'novela romantica': 'https://booknet.com/es/genre/novela-romantica',
    'ciencia ficcion': 'https://booknet.com/es/genre/ciencia-ficcion',
    mistica: 'https://booknet.com/es/genre/mistica',
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    // Normalizamos la cadena para comparar sin mayúsculas ni acentos
    const queryNormalized = searchTerm
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    let foundGenre = false;
    // Recorremos los géneros disponibles
    for (const key in searchRedirects) {
      const keyNormalized = key
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

      if (queryNormalized.includes(keyNormalized)) {
        window.location.href = searchRedirects[key];
        foundGenre = true;
        break;
      }
    }

    if (!foundGenre) {
      Swal.fire({
        title: 'Género no encontrado',
        text: 'No se encontró un género que coincida con tu búsqueda',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex flex-col items-center justify-between px-10 py-2 bg-blue-500">
      <div className="w-full flex flex-row justify-between items-center">
        {/* Logo y Nombre */}
        <Link href="/">
          <div className="flex flex-col items-center">
            <Image src="/images/Logo.png" alt="Logo" width={40} height={40} className="cursor-pointer rounded-full" />
            <span className="text-white text-sm mt-1">LibroNet</span>
          </div>
        </Link>

        {/* Login / Logout */}
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

        {/* Caja de búsqueda */}
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="max-w-md flex-1 p-2 mr-4 rounded-md focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 h-6 w-6" />
          </button>
        </form>

        {/* Menú hamburguesa para móviles */}
        <div className="block md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      {/* Menú de navegación */}
      <div className={`flex flex-col md:flex-row justify-center items-center md:w-full transition-transform duration-300 md:transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <Link href="/" className="text-black mb-2 md:mb-0 md:mr-4">Home</Link>
        <Link href="https://booknet.com/es/genre/magia" className="text-black mb-2 md:mb-0 md:mr-4">Magia</Link>
        <Link href="https://booknet.com/es/genre/fantasia" className="text-black mb-2 md:mb-0 md:mr-4">Fantasía</Link>
        <Link href="https://booknet.com/es/genre/novela-romantica" className="text-black mb-2 md:mb-0 md:mr-4">Novela romántica</Link>
        <Link href="https://booknet.com/es/genre/ciencia-ficcion" className="text-black mb-2 md:mb-0 md:mr-4">Ciencia ficción</Link>
        <Link href="https://booknet.com/es/genre/mistica" className="text-black mb-2 md:mb-0 md:mr-4">Mística</Link>
        <Link href="/orders" className="text-black mb-2 md:mb-0 md:mr-4">Mis reservas</Link>
        <Link href="/contacto" className="text-black mb-2 md:mb-0 md:mr-4">Contacto</Link>
        <Link href="/dashboard" className="text-black mb-2 md:mb-0 md:mr-4">Mi Cuenta</Link>
      </div>

      {/*
      <div className="cursor-pointer text-black text-2xl" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      */}
    </nav>
  );
};

export default Navbar;









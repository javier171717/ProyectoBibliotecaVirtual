"use client"
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    console.log("Clic en el ícono del carrito");
  };

  return (
    <nav className="flex flex-col items-center justify-between px-10 py-4 bg-blue-500">
      <div className="w-full flex flex-row justify-between items-center">
        <Link href="/">
        <Image src="/images/Logo.png" alt="Logo" width={80} height={80} className="cursor-pointer" />
        </Link>
        <button className="flex items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="max-w-md flex-1 p-2 mr-4 rounded-md focus:outline-none"
          />
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <div className="block md:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faBars : faBars} />
        </div>
      </div>

      <div className={`flex flex-col md:flex-row justify-center md:justify-end items-center md:w-full transition-transform duration-300 md:transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">SmartPhones</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Laptops</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Tablets</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Headphones</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Cameras</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Printers</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Monitors</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Storage</a>
        <a href="#" className="text-black mb-2 md:mb-0 md:mr-4">Accessories</a>
      </div>

      <div className="cursor-pointer text-black text-2xl" onClick={handleCartClick}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar;


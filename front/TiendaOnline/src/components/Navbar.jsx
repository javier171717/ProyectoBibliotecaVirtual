import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from '../assets/loguito.png';

// Estilos para el ícono del carrito
const CartIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 1.5rem;
`;

// Estilos para el contenedor del Navbar
const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 16px;
  position: relative;
`;

// Estilos para la marca del Navbar
const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  position: relative;
  padding: 5px;
`;

// Estilos para el menú del Navbar
const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 16px;
`;

// Estilos para los ítems del menú
const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

// Estilos para el logo
const Logo = styled.img`
  height: 70px;
  position: absolute;
  left: 16px;
  top: 16px;
`;

// Estilos para el contenedor de la barra de búsqueda
const SearchBarContainer = styled.div`
  position: absolute;
  right: 80px;
  top: 16px;
`;

// Estilos para el input de búsqueda
const SearchInput = styled.input`
  padding: 8px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
`;

// Estilos para el botón de búsqueda
const SearchButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #555;
  color: white;
`;

// Componente Navbar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Aquí iría la lógica para realizar la búsqueda
    console.log(`Buscando: ${searchTerm}`);
  };

  return (
    <NavbarContainer>
      <Logo src={logoImage} alt="Logo" />
      <NavBrand>OnlineShop</NavBrand>
      <button onClick={toggleMenu}>☰</button>
      <CartIcon>
        🛒
        <span>{cartItemsCount}</span>
      </CartIcon>
      <SearchBarContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
        />
        <SearchButton onClick={handleSearchSubmit}>Buscar</SearchButton>
      </SearchBarContainer>
      {isMenuOpen && (
        <NavMenu>
          <NavItem>Home</NavItem>
          <NavItem>Products</NavItem>
          <NavItem>About</NavItem>
        </NavMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;


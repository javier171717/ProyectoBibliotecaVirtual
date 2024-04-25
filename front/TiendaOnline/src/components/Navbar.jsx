import React, { useState } from 'react';
import styled from 'styled-components';

// Añadimos un nuevo componente para el ícono del carrito
const CartIcon = styled.div`
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
  font-size: 1.5rem;
`;

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 16px;
  position: relative; // Esto permite posicionar absolutamente el CartIcon
`;

const NavBrand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 16px;
`;

const NavItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Asumimos que tienes una forma de contar los artículos en el carrito
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavBrand>MercadoMágico</NavBrand>
      <button onClick={toggleMenu}>☰</button>
      <CartIcon>
        🛒
        <span>{cartItemsCount}</span> {/* Muestra la cantidad de artículos en el carrito */}
      </CartIcon>
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


import React, { useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 16px;
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <NavBrand>My TiendaOnline</NavBrand>
      <button onClick={toggleMenu}>☰</button> 
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

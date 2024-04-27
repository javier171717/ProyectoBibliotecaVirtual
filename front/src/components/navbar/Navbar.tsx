"use client"
import { useState } from "react";
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #3498DB;
`;


const Logo = styled.img`
  width: 20%; /* Adjust size as needed */
  max-width: 100px;
`;

const SearchBar = styled.input`
  max-width: 400px;
  flex: 1;
  margin: 0 1rem;
  padding: 0.5rem;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenuButton = styled.div`
  display: none; /* Hide by default on desktop */
  cursor: pointer;

  @media (max-width: 500px) {
    display: block; /* Show on mobile */
  }

  div {
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px;
  }
`;

const CategoriesMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #8533FF;
  gap: 20px;
  width: 100%;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-1000%)"};

  @media (min-width: 500px) {
    position: relative;
    flex-direction: row;
    transform: translateY(0);
  }
`;

const Category = styled.a`
  text-decoration: none;
  color: black;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <LogoContainer>
        <Logo src= "/images/Logo.png" alt="Logo" />
        <SearchBar type="text" placeholder="Search..." />

        <MobileMenuButton onClick={toggleMenu}>
          <div />
          <div />
          <div />
        </MobileMenuButton>
      </LogoContainer>

      <CategoriesMenu isOpen={isMenuOpen}>
        <Category>Category 1</Category>
        <Category>Category 2</Category>
        <Category>Category 3</Category>
        {/* Add more categories as needed */}
      </CategoriesMenu>
    </Nav>
  );
};

export default Navbar;

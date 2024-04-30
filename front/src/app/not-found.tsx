"use client"

import React from 'react';
import Link from "next/link";
import styled from "styled-components";

// Estilos con styled-components
const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundTitle = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const NotFoundText = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const NotFoundLink = styled.a`
  margin-top: 20px;
  font-size: 1.2rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404 - Página no encontrada</NotFoundTitle>
      <NotFoundText>Lo sentimos, no pudimos encontrar la página que estás buscando.</NotFoundText>
      <Link href="/">
        <NotFoundLink>Volver a la página de inicio</NotFoundLink>
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;



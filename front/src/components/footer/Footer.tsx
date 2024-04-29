"use client"

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const FooterContainer = styled.footer`
  background-color: #FFC300;
  color:  black;
  padding: 20px;
  text-align: center;
  
`;
const SocialIcons = styled.div`
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  margin-right: 10px;
  font-size: 24px;
  color: black;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0000FF; /* Cambia el color al hacer hover */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Todos los derechos reservados &copy; 2024</p>
      <p>OnlineShop</p>
      <SocialIcons>
        <SocialIcon href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebookF} />
        </SocialIcon>
        <SocialIcon href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;


import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text-black py-5 text-center">
      <p>Todos los derechos reservados &copy; 2024</p>
      <p>OnlineShop</p>
      <div className="mt-5">
        <a href="https://www.facebook.com" className="mr-4 text-2xl text-black transition-colors duration-300 hover:text-blue-600">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" className="mr-4 text-2xl text-black transition-colors duration-300 hover:text-blue-600">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" className="text-2xl text-black transition-colors duration-300 hover:text-blue-600">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

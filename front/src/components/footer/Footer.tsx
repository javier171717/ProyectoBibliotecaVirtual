
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-white py-6 text-center shadow-lg">
  <div className="max-w-7xl mx-auto px-4">
    <p className="text-lg font-semibold">
      Todos los derechos reservados &copy; 2024
    </p>
    <p className="mt-1 text-lg">Javier Jimenez S</p>
    <div className="mt-4 flex justify-center space-x-6">
      <a href="https://www.facebook.com" className="text-2xl transition-colors duration-300 hover:text-blue-500">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.twitter.com" className="text-2xl transition-colors duration-300 hover:text-blue-400">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com" className="text-2xl transition-colors duration-300 hover:text-pink-500">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  </div>
</footer>
  )
};

export default Footer;

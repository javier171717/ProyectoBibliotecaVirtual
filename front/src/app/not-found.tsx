

import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-gray-800">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-600">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
      <Link href="/">
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;

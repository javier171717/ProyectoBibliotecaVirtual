

/* import Cards from '@/components/cards/Cards';
import { getProductById } from '@/helpers/product.helpers';

const page = async() => {
  const productId = '3';
  const product = await getProductById(productId);
  return (
    <div>
      < Cards products={[product]} />
    </div>
  )
}

export default page */



// codigo que rederiza un texto si el usuario esta logeado 



/* 'use client'

import { useEffect, useState } from 'react';

const ProtectedPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      {isLoggedIn ? (
        <p className="text-xl font-bold">¡Bienvenido, estás logueado!</p>
      ) : (
        <p className="text-xl font-bold">Por favor, inicia sesión para continuar.</p>
      )}
    </div>
  );
};

export default ProtectedPage;





 */


/* {isLoggedIn && (
  <button 
  onClick={() => window.location.href = '/'} 
  className="bg-orange-500 text-white py-2 px-4 rounded"
  >
  Enviar
  </button>
  )} */

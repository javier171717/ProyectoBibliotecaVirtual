
//getProductById
 
/*   import Cards from '@/components/cards/Cards';
import { getProductById } from '@/helpers/product.helpers';

const page = async() => {
  const productId = '3';
  const product = await getProductById(productId);
  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      < Cards products={[product]} />
    </div>
  )
}

export default page   */

 



// ProtectedPage

  'use client'

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
 




 
//button

/*{isLoggedIn && (
  <button 
  onClick={() => window.location.href = '/dashboard'} 
  className="bg-orange-500 text-white py-2 px-4 rounded"
  >
  Enviar
  </button>
  )}    
    
  */


  //ProtectedPage

     /* "use client"

  import { useEffect } from 'react';
  import { useRouter } from 'next/navigation';
  
  const ProtectedPage = () => {
    const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, []);
  
    return (
      <div className="p-6 mt-40">
        <h1 className="text-xl font-bold">Página protegida</h1>
        <p className="text-xl font-bold">Solo puedes ver esto si estás logueado</p>
      </div>
    );
  };
  
  export default ProtectedPage; */
   
 
  

"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


interface Compra {
  id: number;
  nombreProducto: string;
  precio: number;
  imagen: string;
  
}

const Compras = () => {
  const router = useRouter();
  const [compras, setCompras] = useState<Compra[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
    } else {
      obtenerCompras();
    }
  }, []);

  const obtenerCompras = () => {
    try {
      const cartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]');
      setCompras(cartProducts);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCheckout = () => {
    // Redirige al usuario a la página de checkout
    router.push('/checkout');
  };
  
  return (
    <div>
      <h1>Esta es la página de compras</h1>
      {compras.length > 0 ? (
        <div>
          <ul>
            {compras.map((compra) => (
              <li key={compra.id}>
                <img src={compra.imagen} alt={compra.nombreProducto} width={50} height={50} />
                {compra.nombreProducto} - ${compra.precio}
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            onClick={handleCheckout}
          >
            Verifica tu pedido!..
          </button>
        </div>
      ) : (
        <p>No se han agregado productos al carrito aún.</p>
      )}
    </div>
  );
  
};

export default Compras;

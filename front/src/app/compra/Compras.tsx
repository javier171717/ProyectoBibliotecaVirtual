"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Compra {
  id: number;
  nombreProducto: string;
  //precio: number;
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
    <div className="pt-24 p-6 md:pt-28"> {/* Ajustar el padding superior */}
      <h1 className="text-2xl font-bold mb-4">Tus libros favoritos...!</h1>
      {compras.length > 0 ? (
        <div className="space-y-4">
          <ul className="space-y-4">
            {compras.map((compra) => (
              <li key={compra.id} className="flex items-center p-4 bg-white rounded-lg shadow-md">
                <img src={compra.imagen} alt={compra.nombreProducto} width={50} height={50} className="mr-4" />
                <div>
                  <p className="text-gray-800 font-medium">{compra.nombreProducto}</p>
                 {/*  <p className="text-gray-600">{compra.precio}</p> */}
                </div>
              </li>
            ))}
          </ul>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            onClick={handleCheckout}
          >
            Verifica tu reserva!..
          </button>
        </div>
      ) : (
        <p>Aun no tienes reservas de libros.</p>
      )}
    </div>
  );
};

export default Compras;

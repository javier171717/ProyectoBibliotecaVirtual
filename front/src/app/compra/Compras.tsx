"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Define la interfaz para el tipo de datos de las compras
interface Compra {
  nombreProducto: string;
  precio: number;
  // Otros campos necesarios aquí
}

const Compras = () => {
  const router = useRouter();
  const [compras, setCompras] = useState<Compra[]>([]); // Especifica el tipo Compra[] para compras

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
      fetch('http://localhost:3001/users/orders', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Error al obtener las compras del usuario');
          }
        })
        .then((data) => {
          setCompras(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <h1>Esta es la página de compras</h1>
      {compras.length > 0 ? (
        <ul>
          {compras.map((compra, index) => (
            <li key={index}>{compra.nombreProducto} - {compra.precio}</li>
          ))}
        </ul>
      ) : (
        <p>No se han realizado compras aún.</p>
      )}
    </div>
  );
};

export default Compras;
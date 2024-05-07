"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';


const Compras = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica la autenticación al cargar la página
    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay token, redirige al usuario a la página de inicio de sesión
      router.push('/login');
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al cargar la página

  return (
    <div>
      <h1>Esta es la página de compras</h1>
      {/* Agrega aquí el contenido de la página de compras */}
    </div>
  );
}

export default Compras;




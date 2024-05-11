
"use client"
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData.user); // Actualiza el estado con los datos del usuario
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al cargar la página

  return (
    <div>
      <h1>Dashboard de Usuario</h1>
      {userData ? (
        <div>
          <p>Bienvenido, {userData.name}!</p>
          <p>Tu dirección: {userData.address}</p>
          {/* Mostrar otras propiedades del usuario si es necesario */}
        </div>
      ) : (
        <p>No hay datos de usuario disponibles.</p>
      )}
    </div>
  );
};

export default Dashboard;


"use client"
import React, { useEffect, useState } from 'react';


const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Obtener los datos del usuario desde el almacenamiento local (o desde tu API)
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
      <h1>Dashboard de Usuario</h1>
      {userData ? (
        <div>
          <p>Bienvenido, {userData.name}!</p>
          <p>Tu direccion : {userData.address}</p>
         
        </div>
      ) : (
        <p>No hay datos de usuario disponibles.</p>
      )}
    </div>
  );
};

export default Dashboard;


"use client";
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData.user);
    }
  }, []);

  return (
    <div className="container mx-auto mt-40 p-6 md:mt-48 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Mis Datos</h1>
      {userData ? (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-800 mb-2">Bienvenido, {userData.name}!</p>
          <p className="text-gray-700 mb-2">Tu dirección: {userData.address}</p>
          <p className="text-gray-700 mb-2">Tu número de contacto es: {userData.phone}</p>
          <p className="text-gray-700">Tu correo es: {userData.email}</p>
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-600">No hay datos de usuario disponibles.</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;



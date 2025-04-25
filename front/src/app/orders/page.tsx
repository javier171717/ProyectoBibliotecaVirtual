"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Orders {
  id: number;
  date: string;
  total: number;
  products: {
    id: number;
    name: string;
    price: number;
  }[];
}

const OrdersPage = () => {
  const router = useRouter();
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const fetchOrders = () => {
      const storedOrders = localStorage.getItem('orders');
      if (storedOrders) {
        const parsedOrders: Orders[] = JSON.parse(storedOrders);
        setOrders(parsedOrders);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="pt-40 p-6 md:pt-48 min-h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Historial De Reservas</h1>
      {orders.length > 0 ? (
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-150px)] flex-grow">
          {orders.map((order) => {
            const fechaReserva = new Date(order.date);
            const fechaEntrega = new Date(fechaReserva.getTime() + 24 * 60 * 60 * 1000); // +24 horas
  
            return (
              <div
                key={order.id}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-gray-700 mb-1">Fecha de reserva: {fechaReserva.toLocaleString()}</p>
                <p className="text-gray-700 mb-4">Fecha de entrega: {fechaEntrega.toLocaleString()}</p>
                <ul className="list-none pl-0 mb-4">
                  {order.products.map((product) => (
                    <li key={product.id} className="mb-2">
                      <p className="text-gray-800 font-medium">Nombre: {product.name}</p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-600">No hay reservas disponibles.</p>
        </div>
      )}
    </div>
  );
  
};

export default OrdersPage;


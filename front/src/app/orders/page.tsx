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
    <div>
      <h1>Historial de Compras</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Fecha: {new Date(order.date).toLocaleString()}</p>
              <p>Total: ${order.total}</p>
              <ul>
                {order.products.map((product) => (
                  <li key={product.id}>
                    <p>Nombre: {product.name}</p>
                    <p>Precio: ${product.price}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay órdenes disponibles.</p>
      )}
    </div>
  );
};

export default OrdersPage;


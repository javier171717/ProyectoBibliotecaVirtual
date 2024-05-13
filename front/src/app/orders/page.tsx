"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getOrders } from '@/helpers/orders.helpers';

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
  const [userId, setUserId] = useState<number | null>(null); 

  useEffect(() => {
    const fetchUserId = () => {
      
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        setUserId(parseInt(storedUserId, 10)); 
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    if (userId !== null) {
      const fetchOrders = async () => {
        try {
          const userOrders = await getOrders(userId); 
          setOrders(userOrders || []);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };

      fetchOrders();
    }
  }, [userId]);

  return (
    <div>
      <h1>Historial de Compras</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Fecha: {order.date}</p>
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

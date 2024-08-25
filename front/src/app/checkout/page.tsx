"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface CartProduct {
  id: number;
  nombreProducto: string;
  description: string;
  precio: number;
  stock: number;
  imagen: string;
  categoryId: number;
}

const CheckoutPage = () => {
  const router = useRouter();
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [totalPrecio, setTotalPrecio] = useState<number>(0);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts') || '[]') as CartProduct[];
    setCartProducts(storedCartProducts);

    const total = storedCartProducts.reduce((acc, product) => acc + product.precio, 0);
    setTotalPrecio(total);
  }, []);

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cartProducts.filter((product) => product.id !== productId);
    setCartProducts(updatedCart);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCart));

    const total = updatedCart.reduce((acc, product) => acc + product.precio, 0);
    setTotalPrecio(total);

    if (updatedCart.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'El carrito está vacío',
        text: 'Agrega productos al carrito para continuar con la compra.',
        showConfirmButton: true,
      }).then(() => {
        router.push('/');
      });
    }
  };

  const handleCheckout = () => {
    if (cartProducts.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No puedes confirmar la compra con el carrito vacío. Agrega productos al carrito para continuar.',
        showConfirmButton: true,
      });
    } else {
      const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      const newOrder = {
        id: storedOrders.length + 1,
        date: new Date().toISOString(),
        total: totalPrecio,
        products: cartProducts.map(product => ({
          id: product.id,
          name: product.nombreProducto,
          price: product.precio,
        })),
      };
      storedOrders.push(newOrder);
      localStorage.setItem('orders', JSON.stringify(storedOrders));

      Swal.fire({
        icon: 'success',
        title: '¡Compra realizada con éxito!',
        text: 'Gracias por su compra. Recibirá un correo de confirmación.',
        showConfirmButton: true,
      }).then(() => {
        setCartProducts([]);
        localStorage.removeItem('cartProducts');
        setTotalPrecio(0);
        router.push('/');
      });
    }
  };

  return (
    <div className="container mx-auto mt-24 p-6 md:mt-28"> {/* Ajustar el padding superior */}
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cartProducts.map((product, index) => (
          <div key={index} className="border p-4 flex items-center justify-between bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <div style={{ width: '64px', height: '64px', marginRight: '10px' }}>
                <img src={product.imagen} alt={product.nombreProducto} style={{ width: '100%', height: '100%' }} />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{product.nombreProducto}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.precio}</p>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">Total a pagar: ${totalPrecio}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          onClick={handleCheckout}
        >
          Confirmar compra
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;

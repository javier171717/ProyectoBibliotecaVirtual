'use client';

import React, { useEffect, useState } from 'react';
import { IProduct } from '../types';
import Cards from '@/components/cards/Cards';

const Landing = () => {
  const [saleProducts, setSaleProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: IProduct[] = [
          { id: 1, name: 'iPhone 11', description: 'El último modelo de iPhone con cámara dual.', price: 699, stock: 5, image: 'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp', categoryId: 1, isOnSale: true },
          { id: 2, name: 'MacBook Air', description: 'Ligero y potente, con rendimiento para todo el día.', price: 999, stock: 10, image:'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp', categoryId: 1, isOnSale: true },
          { id: 3, name: 'iPad Pro', description: 'La experiencia más inmersiva con la pantalla Liquid Retina.', price: 799, stock: 3, image: 'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',categoryId: 1, isOnSale: true },
          { id: 4, name: 'Apple Watch Series 6', description: '', price: 399, stock: 10, image:  'https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',categoryId: 1, isOnSale: false },
          { id: 5, name: 'AirPods Pro', description: '', price: 249, stock: 6, image: 'https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp', categoryId: 1, isOnSale: false },
          { id: 6, name: 'HomePod mini', description: '', price: 99, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp', categoryId: 1, isOnSale: false }
        ];
        console.log('Productos obtenidos:', products);
        const filteredProducts = products.filter(product => product.isOnSale);
        console.log('Productos en oferta:', filteredProducts);

        setSaleProducts(filteredProducts);
      } catch (error) {
        setError('Error al obtener productos');
        console.error('Error al obtener productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Cargando libros...</div>;
  if (error) return <div className="text-center text-red-600">{error}</div>;

  return (
    <div className="p-6 mt-40"> 
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-2">¡Libros mas consultados!</h1>
        {/* <p className="text-lg">Descuentos increíbles en celulares, tabletas y computadoras. ¡Aprovecha antes de que se acaben!</p> */}
      </div>
  
      <div className="flex flex-wrap justify-center gap-6">
        {saleProducts.length > 0 ? (
          <Cards products={saleProducts} />
        ) : (
          <div className="text-center">No hay libros en oferta actualmente.</div>
        )}
      </div>
  
      <div className="mt-8 p-4 bg-red-100 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-2">¡Tiempo limitado!</h2>
        <p className="text-lg">Las ofertas terminan en:</p>
        <div className="text-4xl font-bold text-red-600">00:23:45</div>
      </div>
    </div>
  );
  
};

export default Landing;






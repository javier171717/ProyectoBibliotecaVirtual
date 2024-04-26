// src/components/ProductGrid.tsx
import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;


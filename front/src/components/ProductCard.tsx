// src/components/ProductCard.tsx
import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="w-full h-auto mb-2" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default ProductCard;


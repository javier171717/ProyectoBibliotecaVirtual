"use client"

import Cards from '@/components/cards/Cards';
import { getProductById } from '@/helpers/product.helpers';

const page = async() => {
  const productId = '3';
  const product = await getProductById(productId);
  return (
    <div className="flex items-center justify-center min-h-screen mt-24">
      < Cards products={[product]} />
    </div>
  )
}

export default page 
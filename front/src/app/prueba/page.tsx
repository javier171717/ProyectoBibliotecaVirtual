/* import Cards from "@/components/cards/Cards";
import { getProductById } from "@/helpers/product.helpers";


const page =  async () => {
  const productId = "6" ;
  const product = await getProductById(productId);

  return (
    <div>
      <Cards products = {[product]} />
    </div>
  )
}

export default page */

import Cards from '@/components/cards/Cards';
import { getProductById } from '@/helpers/product.helpers';

const page = async() => {
  const productId = '3';
  const product = await getProductById(productId);
  return (
    <div>
      < Cards products={[product]} />
    </div>
  )
}

export default page









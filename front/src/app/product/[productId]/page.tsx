
import { getProductById } from "@/helpers/product.helpers";
import Link from "next/link";

const DetailProduct = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductById(params.productId);

  console.log(product);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 bg-gray-200 p-4 rounded text-center">
        <h2>{product.name}</h2>
        <img src={product.image} alt="imagen del producto" width={100} height={100} className="mx-auto" />
        <p>{product.description}</p>
        <p>Price: $ {product.price}</p>
        <p>Stock: {product.stock}</p>
        <Link href="/compra" passHref>
          <span className="text-blue-500 font-semibold hover:text-blue-700 cursor-pointer">Comprar</span>
        </Link>
      </div>
    </div>
  );
};

export default DetailProduct;


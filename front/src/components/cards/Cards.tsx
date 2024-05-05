
import Link from 'next/link';
import { IProduct } from "@/app/types/index";
import Card from "../card/Card";

const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    
    <div className="flex justify-center items-center flex-wrap">
      {products?.map((product) => (
        <Link href={`/product/${product.id}`} key={product.name} passHref>
          <Card key={product.name} {...product} />
        </Link>
      ))}
    </div>
   
  );
};

export default Cards;



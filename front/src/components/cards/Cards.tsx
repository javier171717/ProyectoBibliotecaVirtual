import Link from 'next/link';
import { IProduct } from "@/app/types/idex";
import Card from "../card/Card";




const Cards = ({ products }: { products: IProduct[] }) => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {products?.map((product) => (
        <Link href={`/product/${product.id}`} key={product.name}>
          <Card key={product.name} {...product} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
